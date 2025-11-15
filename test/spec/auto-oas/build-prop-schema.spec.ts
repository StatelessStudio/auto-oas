import 'jasmine';
import { SchemaObject } from '../../../src';
import {
	RunsLikeAValSan,
	LengthValidator,
	IntegerValidator,
	ComposedValSan,
} from 'valsan';
import { buildPropSchema } from '../../../src';

describe('buildPropSchema', () => {
	it('propagates valsan.example to schema.example', () => {
		const valSan = {
			type: 'string',
			rules: () => ({}),
			example: 'foo-example',
		} as unknown as RunsLikeAValSan;

		const schema: SchemaObject = buildPropSchema(valSan);
		expect(schema.example).toBe('foo-example');
	});

	it('maps validator type to schema type', () => {
		const valSan = new IntegerValidator();

		const schema: SchemaObject = buildPropSchema(
			valSan as unknown as RunsLikeAValSan
		);

		expect(schema).toBeDefined();
		expect(schema.type).toBe((valSan as unknown as { type?: string }).type);
		if (schema.description) {
			expect(typeof schema.description).toBe('string');
		}
	});

	it('joins multiple helperText values', () => {
		const valSan = new LengthValidator({ minLength: 1 });

		const schema: SchemaObject = buildPropSchema(
			valSan as unknown as RunsLikeAValSan
		);

		expect(schema.type).toBe((valSan as unknown as { type?: string }).type);
		if (schema.description) {
			expect(typeof schema.description).toBe('string');
		}
	});

	it('handles numeric types (IntegerValidator)', () => {
		const iv = new IntegerValidator();

		expect(buildPropSchema(iv as unknown as RunsLikeAValSan).type).toBe(
			(iv as unknown as { type?: string }).type
		);
	});

	it('with no rules returns no description', () => {
		const v = {
			type: 'string',
			rules: () => undefined,
		} as unknown as RunsLikeAValSan;

		const s = buildPropSchema(v);
		expect(s.description).toBeUndefined();
	});

	it('copies valsan.format into schema.format when present', () => {
		const v = {
			type: 'string',
			rules: () => ({}),
			format: 'email',
		} as unknown as RunsLikeAValSan;

		const s = buildPropSchema(v);
		expect(s.format).toBe('email');
	});

	it('does not set format if valsan.format is missing', () => {
		const v = {
			type: 'string',
			rules: () => ({}),
		} as unknown as RunsLikeAValSan;

		const s = buildPropSchema(v);
		expect(s.format).toBeUndefined();
	});

	it('falls back to string when type is missing', () => {
		const noType = {
			rules: () => ({}),
		} as unknown as RunsLikeAValSan;

		const s = buildPropSchema(noType);
		expect(s.type).toBe('string');
	});

	describe('composed validators', () => {
		it('collects helperText from composed validators', () => {
			class A {
				type = 'string';
				rules() {
					return { a: { dev: { helperText: 'from A' } } };
				}
			}

			class B {
				type = 'string';
				rules() {
					return { b: { user: { helperText: 'from B' } } };
				}
			}

			const composed = new ComposedValSan([
				new A() as unknown as RunsLikeAValSan,
				new B() as unknown as RunsLikeAValSan,
			]);

			const schema: SchemaObject = buildPropSchema(
				composed as unknown as RunsLikeAValSan
			);

			expect(schema.description).toContain('from A');
			expect(schema.description).toContain('from B');
		});

		it('joins helperText with "; " in the composed order', () => {
			class A {
				type = 'string';
				rules() {
					return { a: { dev: { helperText: 'from A' } } };
				}
			}

			class B {
				type = 'string';
				rules() {
					return { b: { dev: { helperText: 'from B' } } };
				}
			}

			class C {
				type = 'string';
				rules() {
					return { c: { dev: { helperText: 'from C' } } };
				}
			}

			const composed = new ComposedValSan([
				new A() as unknown as RunsLikeAValSan,
				new B() as unknown as RunsLikeAValSan,
				new C() as unknown as RunsLikeAValSan,
			]);

			const schema = buildPropSchema(
				composed as unknown as RunsLikeAValSan
			);

			expect(schema.description).toBe('from A; from B; from C');
		});

		it('no helperText results in no description', () => {
			class Nothing {
				type = 'string';
				rules() {
					return { nothing: {} };
				}
			}

			const schema = buildPropSchema(
				new Nothing() as unknown as RunsLikeAValSan
			);

			expect(schema.description).toBeUndefined();
		});

		it('nested composed validators aggregate helperText in order', () => {
			class One {
				type = 'string';
				rules() {
					return { one: { dev: { helperText: 'one' } } };
				}
			}

			class Two {
				type = 'string';
				rules() {
					return { two: { dev: { helperText: 'two' } } };
				}
			}

			class Three {
				type = 'string';
				rules() {
					return { three: { dev: { helperText: 'three' } } };
				}
			}

			const nested = new ComposedValSan([
				new ComposedValSan([
					new One() as unknown as RunsLikeAValSan,
					new Two() as unknown as RunsLikeAValSan,
				]) as unknown as RunsLikeAValSan,
				new Three() as unknown as RunsLikeAValSan,
			]);

			const schema = buildPropSchema(
				nested as unknown as RunsLikeAValSan
			);

			expect(schema.description).toBe('one; two; three');
		});
	});
});

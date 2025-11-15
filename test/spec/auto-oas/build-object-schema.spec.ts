import 'jasmine';
import { SchemaObject } from '../../../src/oas/v3.1';
import {
	RunsLikeAValSan,
	LengthValidator,
	IntegerValidator,
	ComposedValSan,
} from 'valsan';
import { ObjectSanitizer } from 'valsan/object-sanitizer';
import { buildObjectSchema } from '../../../src/auto-oas';

describe('buildObjectSchema', () => {
	it('builds properties', () => {
		const age = new IntegerValidator();
		const name = new LengthValidator({ minLength: 1 });

		const schemaObj = { schema: { age, name } } as unknown;
		const sanitizer = schemaObj as ObjectSanitizer;

		const objSchema = buildObjectSchema(sanitizer);

		expect(objSchema).toBeDefined();
		expect(objSchema!.type).toBe('object');
		expect(objSchema!.properties).toBeDefined();
		expect((objSchema!.properties!['age'] as SchemaObject).type).toBe(
			(age as unknown as { type?: string }).type
		);
		expect((objSchema!.properties!['name'] as SchemaObject).type).toBe(
			(name as unknown as { type?: string }).type
		);
	});

	it('handles composed validators', () => {
		class X {
			type = 'number';
			rules() {
				return { x: { dev: { helperText: 'x hint' } } };
			}
		}

		class Y {
			type = 'string';
			rules() {
				return { y: { user: { helperText: 'y hint' } } };
			}
		}

		const comp = new ComposedValSan([
			new X() as unknown as RunsLikeAValSan,
			new Y() as unknown as RunsLikeAValSan,
		]);

		const sanitizer = { schema: { comp } } as unknown as ObjectSanitizer;

		const objSchema = buildObjectSchema(sanitizer);

		expect(objSchema).toBeDefined();
		expect(
			(objSchema!.properties!['comp'] as SchemaObject).description
		).toContain('x hint');
		expect(
			(objSchema!.properties!['comp'] as SchemaObject).description
		).toContain('y hint');
	});
});

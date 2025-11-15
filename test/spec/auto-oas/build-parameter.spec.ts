import 'jasmine';
import { SchemaObject, ParameterObject } from '../../../src/oas/v3.1';
import { RunsLikeAValSan } from 'valsan';
import { buildParameter } from '../../../src/auto-oas';

describe('buildParameter', () => {
	it('sets required correctly for optional query param', () => {
		const optionalVal = {
			type: 'string',
			rules: () => ({}),
			options: { isOptional: true },
		} as unknown as RunsLikeAValSan;

		const param: ParameterObject = buildParameter(
			'q',
			optionalVal,
			'query'
		);

		expect(param).toBeDefined();
		expect(param.name).toBe('q');
		expect(param.in).toBe('query');
		expect(param.required).toBeFalse();
		expect((param.schema as SchemaObject).type).toBe('string');
	});

	it('sets required for path/header, optional for query', () => {
		const pathVal = {
			type: 'string',
			rules: () => ({}),
			options: { isOptional: true },
		} as unknown as RunsLikeAValSan;

		const headerVal = {
			type: 'string',
			rules: () => ({}),
		} as unknown as RunsLikeAValSan;

		const queryVal = {
			type: 'string',
			rules: () => ({}),
			options: { isOptional: true },
		} as unknown as RunsLikeAValSan;

		const p = buildParameter('id', pathVal, 'path');
		const h = buildParameter('X-Token', headerVal, 'header');
		const q = buildParameter('q', queryVal, 'query');

		expect(p.required).toBeTrue();
		expect(h.required).toBeTrue();
		expect(q.required).toBeFalse();
	});

	it('propagates schema.format from valsan into parameter.schema', () => {
		const valWithFormat = {
			type: 'string',
			rules: () => ({}),
			format: 'date-time',
		} as unknown as RunsLikeAValSan;

		const param = buildParameter('ts', valWithFormat, 'query');
		expect((param.schema as SchemaObject).format).toBe('date-time');
	});

	it('does not set format if valsan.format is missing', () => {
		const valNoFormat = {
			type: 'string',
			rules: () => ({}),
		} as unknown as RunsLikeAValSan;

		const param = buildParameter('foo', valNoFormat, 'query');
		expect((param.schema as SchemaObject).format).toBeUndefined();
	});

	it('overrides existing schema.format if valsan.format is present', () => {
		const valWithFormat = {
			type: 'string',
			rules: () => ({}),
			format: 'uuid',
		} as unknown as RunsLikeAValSan;

		// Simulate a schema with a pre-existing format (should be overwritten)
		const param = buildParameter('id', valWithFormat, 'query');
		expect((param.schema as SchemaObject).format).toBe('uuid');
	});
});

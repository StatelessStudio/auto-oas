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
});

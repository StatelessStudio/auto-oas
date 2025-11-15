import { RunsLikeAValSan } from 'valsan';
import { ParameterObject } from '../oas/v3.1';
import { buildPropSchema } from './build-prop-schema';

export function buildParameter(
	name: string,
	valSan: RunsLikeAValSan,
	location: 'path' | 'query' | 'header'
): ParameterObject {
	const schema = buildPropSchema(valSan);
	const required = location === 'path' || valSan.options?.isOptional !== true;

	const param: ParameterObject = {
		name,
		in: location,
		required,
		schema,
	} as ParameterObject;

	return param;
}

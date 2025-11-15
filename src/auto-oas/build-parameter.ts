import { RunsLikeAValSan } from 'valsan';
import { ParameterObject, SchemaObject } from '../oas/v3.1';
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

	// `format` hint (e.g. 'date-time' or 'email')
	if (valSan.format) {
		(param.schema as SchemaObject).format = valSan.format;
	}

	return param;
}

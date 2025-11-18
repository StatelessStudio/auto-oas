import {
	ArrayValSan,
	ObjectSanitizer,
	ObjectValSan,
	RunsLikeAValSan,
} from 'valsan';
import { SchemaObject } from '../oas/v3.1';
import { buildPropSchema } from './build-prop-schema';

export function buildArrayValSanSchema(
	sanitizer: ArrayValSan
): SchemaObject | undefined {
	const schema: SchemaObject = { type: 'array' };
	schema.items = buildPropSchema(sanitizer.schema as RunsLikeAValSan);

	return schema;
}

export function buildObjectValSanSchema(
	sanitizer: ObjectSanitizer | ObjectValSan
): SchemaObject | undefined {
	const schema: SchemaObject = { type: 'object', properties: {} };

	for (const key in sanitizer.schema) {
		const valSan = sanitizer.schema[key];
		schema.properties![key] = buildPropSchema(valSan as RunsLikeAValSan);
	}

	return schema;
}

export function buildObjectSchema(
	sanitizer: ObjectSanitizer | ObjectValSan | ArrayValSan
): SchemaObject | undefined {
	if ('type' in sanitizer && sanitizer.type === 'array') {
		return buildArrayValSanSchema(sanitizer as ArrayValSan);
	}
	else {
		return buildObjectValSanSchema(
			sanitizer as ObjectSanitizer | ObjectValSan
		);
	}
}

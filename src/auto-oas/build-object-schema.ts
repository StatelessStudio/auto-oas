import { ObjectSanitizer, RunsLikeAValSan } from 'valsan';
import { SchemaObject } from '../oas/v3.1';
import { buildPropSchema } from './build-prop-schema';

export function buildObjectSchema(
	sanitizer: ObjectSanitizer
): SchemaObject | undefined {
	const schema: SchemaObject = { type: 'object', properties: {} };

	for (const key in sanitizer.schema) {
		const valSan = sanitizer.schema[key];
		schema.properties![key] = buildPropSchema(valSan as RunsLikeAValSan);
	}

	return schema;
}

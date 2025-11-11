import { ReferenceObject } from '../reference';

/**
 * The Schema Object allows the definition of input and output data types.
 * See: https://spec.openapis.org/oas/v3.1.0#schema-object
 *
 * @example
 * {
 *   type: 'object',
 *   properties: {
 *     id: { type: 'integer', format: 'int64' },
 *     name: { type: 'string' }
 *   }
 * }
 */
export interface SchemaObject {
	$id?: string;
	$schema?: string;
	$anchor?: string;
	$ref?: string;
	$comment?: string;
	title?: string;
	description?: string;
	writeOnly?: boolean;
	multipleOf?: number;
	maximum?: number;
	exclusiveMaximum?: number;
	minimum?: number;
	exclusiveMinimum?: number;
	maxLength?: number;
	minLength?: number;
	pattern?: string;
	maxItems?: number;
	minItems?: number;
	uniqueItems?: boolean;
	maxContains?: number;
	minContains?: number;
	maxProperties?: number;
	default?: unknown;
	required?: string[];
	type?: string | string[];
	examples?: unknown[];
	oneOf?: (SchemaObject | ReferenceObject)[];
	anyOf?: (SchemaObject | ReferenceObject)[];
	not?: SchemaObject | ReferenceObject;
	if?: SchemaObject | ReferenceObject;
	then?: SchemaObject | ReferenceObject;
	else?: SchemaObject | ReferenceObject;
	dependentSchemas?: Record<string, SchemaObject | ReferenceObject>;
	dependentRequired?: Record<string, string[]>;
	properties?: Record<string, SchemaObject | ReferenceObject>;
	patternProperties?: Record<string, SchemaObject | ReferenceObject>;
	additionalProperties?: boolean | SchemaObject | ReferenceObject;
	propertyNames?: SchemaObject | ReferenceObject;
	items?: SchemaObject | ReferenceObject | (SchemaObject | ReferenceObject)[];
	enum?: unknown[];
}

import { HeaderObject } from '../header';
import { SchemaObject } from '../schema';
import { ReferenceObject } from '../reference';
import { ExampleObject } from '../example';
import { MediaTypeObject } from '../media';

/**
 * Describes a single operation parameter.
 * See: https://spec.openapis.org/oas/v3.1.0#parameter-object
 *
 * @example
 * {
 *   name: 'limit',
 *   in: 'query',
 *   description: 'How many items to return at one time (max 100)',
 *   required: false,
 *   schema: { type: 'integer', format: 'int32' }
 * }
 */
export interface ParameterObject extends HeaderObject {
	name: string;
	in: string;
	required?: boolean;
	allowEmptyValue?: boolean;
	style?: string;
	explode?: boolean;
	allowReserved?: boolean;
	schema?: SchemaObject | ReferenceObject;
	example?: unknown;
	examples?: Record<string, ExampleObject | ReferenceObject>;
	content?: Record<string, MediaTypeObject>;
}

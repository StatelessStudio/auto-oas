import { SchemaObject } from '../schema';
import { ReferenceObject } from '../reference';
import { ExampleObject } from '../example';
import { MediaTypeObject } from '../media';

/**
 * The Header Object follows the structure of the Parameter Object with the
 * following changes.
 * See: https://spec.openapis.org/oas/v3.1.0#header-object
 *
 * @example
 * {
 *   description: 'The number of allowed requests in the current period',
 *   schema: { type: 'integer' }
 * }
 */
export interface HeaderObject {
	description?: string;
	required?: boolean;
	deprecated?: boolean;
	allowEmptyValue?: boolean;
	style?: string;
	explode?: boolean;
	allowReserved?: boolean;
	schema?: SchemaObject | ReferenceObject;
	example?: unknown;
	examples?: Record<string, ExampleObject | ReferenceObject>;
	content?: Record<string, MediaTypeObject>;
}

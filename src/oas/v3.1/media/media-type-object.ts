import { ExampleObject } from '../example';
import { ReferenceObject } from '../reference';
import { SchemaObject } from '../schema';
import { EncodingObject } from './encoding-object';

/**
 * Each Media Type Object provides schema and examples for the media type
 * identified by its key.
 * See: https://spec.openapis.org/oas/v3.1.0#media-type-object
 *
 * @example
 * {
 *   schema: { type: 'string' },
 *   example: 'dog'
 * }
 */
export interface MediaTypeObject {
	schema?: SchemaObject | ReferenceObject;
	example?: unknown;
	examples?: Record<string, ExampleObject | ReferenceObject>;
	encoding?: Record<string, EncodingObject>;
}

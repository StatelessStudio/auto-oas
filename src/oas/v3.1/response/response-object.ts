import { HeaderObject } from '../header';
import { ReferenceObject } from '../reference';
import { MediaTypeObject } from '../media';
import { LinkObject } from '../link';

/**
 * Describes a single response from an API Operation.
 * See: https://spec.openapis.org/oas/v3.1.0#response-object
 *
 * @example
 * {
 *   description: 'A complex object array response',
 *   content: {
 *     'application/json': {
 *       schema: {
 *         type: 'array',
 *         items: { $ref: '#/components/schemas/VeryComplexType' }
 *       }
 *     }
 *   }
 * }
 */
export interface ResponseObject {
	description: string;
	headers?: Record<string, HeaderObject | ReferenceObject>;
	content?: Record<string, MediaTypeObject>;
	links?: Record<string, LinkObject | ReferenceObject>;
}

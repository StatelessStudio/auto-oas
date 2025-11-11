import { ReferenceObject } from '../reference';
import { ResponseObject } from './response-object';

/**
 * A container for the expected responses of an operation.
 * See: https://spec.openapis.org/oas/v3.1.0#responses-object
 *
 * @example
 * {
 *   '200': {
 *     description: 'A list of pets.'
 *   },
 *   default: {
 *     description: 'unexpected error',
 *     content: {
 *       'application/json': {
 *         schema: { $ref: '#/components/schemas/Error' }
 *       }
 *     }
 *   }
 * }
 */
export interface ResponsesObject {
	[statusCode: string]: ResponseObject | ReferenceObject;
}

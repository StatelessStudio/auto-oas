import { MediaTypeObject } from '../media';

/**
 * Describes a single request body.
 * See: https://spec.openapis.org/oas/v3.1.0#request-body-object
 *
 * @example
 * {
 *   description: 'user to add to the system',
 *   content: {
 *     'application/json': {
 *       schema: { $ref: '#/components/schemas/User' }
 *     }
 *   }
 * }
 */
export interface RequestBodyObject {
	description?: string;
	content: Record<string, MediaTypeObject>;
	required?: boolean;
}

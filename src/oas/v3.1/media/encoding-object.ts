import { HeaderObject } from '../header';
import { ReferenceObject } from '../reference';

/**
 * A single encoding definition applied to a single schema property.
 * See: https://spec.openapis.org/oas/v3.1.0#encoding-object
 *
 * @example
 * {
 *   contentType: 'image/png',
 *   headers: {
 *     X-Rate-Limit-Limit: {
 *       description: 'The number of allowed requests in the current period'
 *     }
 *   }
 * }
 */
export interface EncodingObject {
	contentType?: string;
	headers?: Record<string, HeaderObject | ReferenceObject>;
	style?: string;
	explode?: boolean;
	allowReserved?: boolean;
}

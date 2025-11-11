import { PathItemObject } from '../path/path-item-object';
import { ReferenceObject } from '../reference/reference-object';

/**
 * A map of possible out-of-band callbacks related to the parent operation.
 * See: https://spec.openapis.org/oas/v3.1.0#callback-object
 *
 * @example
 * {
 *   'http://notificationServer.com?transactionId={$request.body#/id}': {
 *     post: {
 *       requestBody: {
 *         description: 'Callback payload',
 *         content: {
 *           'application/json': {
 *             schema: { type: 'string' }
 *           }
 *         }
 *       },
 *       responses: {
 *         '200': {
 *           description: 'Callback successfully processed'
 *         }
 *       }
 *     }
 *   }
 * }
 */
export interface CallbackObject {
	[expression: string]: PathItemObject | ReferenceObject;
}

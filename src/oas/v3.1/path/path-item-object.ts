import { OperationObject } from '../operation';
import { ServerObject } from '../server';
import { ParameterObject } from '../parameter';
import { ReferenceObject } from '../reference';

/**
 * Describes the operations available on a single path.
 * See: https://spec.openapis.org/oas/v3.1.0#path-item-object
 *
 * @example
 * {
 *   get: {
 *     summary: 'List all pets',
 *     operationId: 'listPets',
 *     responses: {
 *       '200': {
 *         description: 'An paged array of pets'
 *       }
 *     }
 *   }
 * }
 */
export interface PathItemObject {
	$ref?: string;
	summary?: string;
	description?: string;
	get?: OperationObject;
	put?: OperationObject;
	post?: OperationObject;
	delete?: OperationObject;
	options?: OperationObject;
	head?: OperationObject;
	patch?: OperationObject;
	trace?: OperationObject;
	servers?: ServerObject[];
	parameters?: (ParameterObject | ReferenceObject)[];
}

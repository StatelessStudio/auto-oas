import { ServerObject } from '../server';

/**
 * The Link object represents a possible design-time link for a response.
 * See: https://spec.openapis.org/oas/v3.1.0#link-object
 *
 * @example
 * {
 *   operationId: 'getUserById',
 *   parameters: {
 *     userId: '$response.body#/id'
 *   }
 * }
 */
export interface LinkObject {
	operationRef?: string;
	operationId?: string;
	parameters?: Record<string, unknown>;
	requestBody?: unknown;
	description?: string;
	server?: ServerObject;
}

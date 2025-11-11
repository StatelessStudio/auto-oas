import { ServerVariableObject } from './server-variable-object';

/**
 * An object representing a server for the API.
 * See: https://spec.openapis.org/oas/v3.1.0#server-object
 *
 * @example
 * {
 *   url: 'https://api.example.com/v1',
 *   description: 'Production server'
 * }
 */
export interface ServerObject {
	url: string;
	description?: string;
	variables?: Record<string, ServerVariableObject>;
}

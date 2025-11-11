/**
 * An object representing a server variable for server URL template
 * substitution.
 * See: https://spec.openapis.org/oas/v3.1.0#server-variable-object
 *
 * @example
 * {
 *   enum: ['8443', '443'],
 *   default: '8443',
 *   description: 'port number'
 * }
 */
export interface ServerVariableObject {
	enum?: string[];
	default: string;
	description?: string;
	examples?: string[];
}

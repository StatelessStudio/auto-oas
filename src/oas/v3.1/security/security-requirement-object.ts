/**
 * Lists the required security schemes to execute this operation.
 * See: https://spec.openapis.org/oas/v3.1.0#security-requirement-object
 *
 * @example
 * {
 *   api_key: []
 * }
 */
export interface SecurityRequirementObject {
	[name: string]: string[];
}

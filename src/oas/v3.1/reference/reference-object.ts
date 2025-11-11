/**
 * A simple object to allow referencing other components in the specification.
 * See: https://spec.openapis.org/oas/v3.1.0#reference-object
 *
 * @example
 * {
 *   $ref: '#/components/schemas/Pet'
 * }
 */
export interface ReferenceObject {
	$ref: string;
	summary?: string;
	description?: string;
}

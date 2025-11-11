/**
 * Allows referencing an external resource for extended documentation.
 * See: https://spec.openapis.org/oas/v3.1.0#external-documentation-object
 *
 * @example
 * {
 *   description: 'Find more info here',
 *   url: 'https://example.com'
 * }
 */
export interface ExternalDocumentationObject {
	description?: string;
	url: string;
}

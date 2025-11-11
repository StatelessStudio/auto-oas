/**
 * An object representing an example for the media type.
 * See: https://spec.openapis.org/oas/v3.1.0#example-object
 *
 * @example
 * {
 *   summary: 'A sample example',
 *   value: {
 *     name: 'Puma',
 *     id: 1
 *   }
 * }
 */
export interface ExampleObject {
	summary?: string;
	description?: string;
	value?: unknown;
	externalValue?: string;
}

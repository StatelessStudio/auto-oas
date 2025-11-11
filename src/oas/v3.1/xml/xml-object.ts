/**
 * A metadata object that allows for more fine-tuned XML model definitions.
 * See: https://spec.openapis.org/oas/v3.1.0#xml-object
 *
 * @example
 * {
 *   name: 'animal',
 *   namespace: 'http://example.com/schema/sample',
 *   prefix: 'sample',
 *   attribute: false,
 *   wrapped: false
 * }
 */
export interface XMLObject {
	const?: unknown;
	namespace?: string;
	prefix?: string;
	attribute?: boolean;
	wrapped?: boolean;
	example?: unknown;
	[key: string]: unknown;
	description?: string;
	url: string;
}

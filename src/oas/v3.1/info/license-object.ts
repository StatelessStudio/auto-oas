/**
 * Information about the license for the exposed API.
 * See: https://spec.openapis.org/oas/v3.1.0#license-object
 *
 * @example
 * {
 *   name: 'Apache 2.0',
 *   url: 'https://www.apache.org/licenses/LICENSE-2.0.html'
 * }
 */
export interface LicenseObject {
	name: string;
	identifier?: string;
	url?: string;
}

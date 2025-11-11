/**
 * Contact information for the exposed API.
 * See: https://spec.openapis.org/oas/v3.1.0#contact-object
 *
 * @example
 * {
 *   name: 'API Support',
 *   url: 'https://www.example.com/support',
 *   email: 'support@example.com'
 * }
 */
export interface ContactObject {
	name?: string;
	url?: string;
	email?: string;
}

import { ContactObject } from './contact-object';
import { LicenseObject } from './license-object';

/**
 * Provides metadata about the API. The metadata can be used by the clients
 * if needed.
 * See: https://spec.openapis.org/oas/v3.1.0#info-object
 *
 * @example
 * {
 *   title: 'Sample Pet Store App',
 *   version: '1.0.1',
 *   description: 'This is a sample server for a pet store.'
 * }
 */
export interface InfoObject {
	title: string;
	summary?: string;
	description?: string;
	termsOfService?: string;
	contact?: ContactObject;
	license?: LicenseObject;
	version: string;
}

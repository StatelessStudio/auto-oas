import { ExternalDocumentationObject } from '../external-doc';

/**
 * Adds metadata to a single tag that is used by the Operation Object.
 * See: https://spec.openapis.org/oas/v3.1.0#tag-object
 *
 * @example
 * {
 *   name: 'pet',
 *   description: 'Pets operations'
 * }
 */
export interface TagObject {
	name: string;
	description?: string;
	externalDocs?: ExternalDocumentationObject;
}

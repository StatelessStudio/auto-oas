import { ComponentsObject } from '../components';
import { ExternalDocumentationObject } from '../external-doc';
import { InfoObject } from '../info';
import { PathItemObject, PathsObject } from '../path';
import { ReferenceObject } from '../reference';
import { SecurityRequirementObject } from '../security';
import { ServerObject } from '../server';
import { TagObject } from '../tag';

/**
 * The root document object of the OpenAPI document.
 * See: https://spec.openapis.org/oas/v3.1.0#openapi-object
 *
 * @example
 * {
 *   openapi: '3.1.0',
 *   info: { title: 'Sample API', version: '1.0.0' },
 *   paths: {}
 * }
 */
export interface OpenAPIObject {
	openapi: string;
	info: InfoObject;
	jsonSchemaDialect?: string;
	servers?: ServerObject[];
	paths?: PathsObject;
	webhooks?: Record<string, PathItemObject | ReferenceObject>;
	components?: ComponentsObject;
	security?: SecurityRequirementObject[];
	tags?: TagObject[];
	externalDocs?: ExternalDocumentationObject;
}

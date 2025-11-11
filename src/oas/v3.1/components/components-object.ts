import { SchemaObject } from '../schema/schema-object';
import { ReferenceObject } from '../reference/reference-object';
import { ResponseObject } from '../response/response-object';
import { ParameterObject } from '../parameter/parameter-object';
import { ExampleObject } from '../example/example-object';
import { RequestBodyObject } from '../request-body/request-body-object';
import { HeaderObject } from '../header/header-object';
import { SecuritySchemeObject } from '../security/security-scheme-object';
import { LinkObject } from '../link/link-object';
import { CallbackObject } from '../callback/callback-object';
import { PathItemObject } from '../path/path-item-object';

/**
 * Holds a set of reusable objects for different aspects of the OAS.
 * See: https://spec.openapis.org/oas/v3.1.0#components-object
 *
 * @example
 * {
 *   schemas: {
 *     GeneralError: { type: 'object' },
 *     Category: { type: 'object' }
 *   },
 *   responses: {
 *     NotFound: { description: 'Entity not found.' }
 *   }
 * }
 */
export interface ComponentsObject {
	schemas?: Record<string, SchemaObject | ReferenceObject>;
	responses?: Record<string, ResponseObject | ReferenceObject>;
	parameters?: Record<string, ParameterObject | ReferenceObject>;
	examples?: Record<string, ExampleObject | ReferenceObject>;
	requestBodies?: Record<string, RequestBodyObject | ReferenceObject>;
	headers?: Record<string, HeaderObject | ReferenceObject>;
	securitySchemes?: Record<string, SecuritySchemeObject | ReferenceObject>;
	links?: Record<string, LinkObject | ReferenceObject>;
	callbacks?: Record<string, CallbackObject | ReferenceObject>;
	pathItems?: Record<string, PathItemObject | ReferenceObject>;
}

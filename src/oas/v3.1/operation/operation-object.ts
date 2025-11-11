import { CallbackObject } from '../callback';
import { ExternalDocumentationObject } from '../external-doc';
import { ParameterObject } from '../parameter';
import { ReferenceObject } from '../reference';
import { RequestBodyObject } from '../request-body';
import { ResponsesObject } from '../response';
import { SecurityRequirementObject } from '../security';
import { ServerObject } from '../server';

/**
 * Describes a single API operation on a path.
 * See: https://spec.openapis.org/oas/v3.1.0#operation-object
 *
 * @example
 * {
 *   tags: ['pet'],
 *   summary: 'Updates a pet in the store with form data',
 *   operationId: 'updatePetWithForm',
 *   responses: {
 *     '200': { description: 'Pet updated.' },
 *     '405': { description: 'Invalid input' }
 *   }
 * }
 */
export interface OperationObject {
	tags?: string[];
	summary?: string;
	description?: string;
	externalDocs?: ExternalDocumentationObject;
	operationId?: string;
	parameters?: (ParameterObject | ReferenceObject)[];
	requestBody?: RequestBodyObject | ReferenceObject;
	responses: ResponsesObject;
	callbacks?: Record<string, CallbackObject | ReferenceObject>;
	deprecated?: boolean;
	security?: SecurityRequirementObject[];
	servers?: ServerObject[];
}

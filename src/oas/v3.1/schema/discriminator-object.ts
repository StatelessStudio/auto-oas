/**
 * When request bodies or response payloads may be one of a number of different
 * schemas, use a discriminator.
 * See: https://spec.openapis.org/oas/v3.1.0#discriminator-object
 *
 * @example
 * {
 *   propertyName: 'petType',
 *   mapping: {
 *     dog: '#/components/schemas/Dog',
 *     cat: '#/components/schemas/Cat'
 *   }
 * }
 */
export interface DiscriminatorObject {
	propertyName: string;
	mapping?: Record<string, string>;
}

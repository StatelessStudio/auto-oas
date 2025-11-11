import { OAuthFlowsObject } from '../security';

export type SecuritySchemeType =
	| 'apiKey'
	| 'http'
	| 'mutualTLS'
	| 'oauth2'
	| 'openIdConnect';

export interface BaseSecurityScheme {
	type: SecuritySchemeType;
	description?: string;
}

/**
 * Defines a security scheme that can be used by the operations.
 * See: https://spec.openapis.org/oas/v3.1.0#security-scheme-object
 *
 * @example
 * {
 *   type: 'apiKey',
 *   name: 'api_key',
 *   in: 'header'
 * }
 */

/**
 * Security scheme for API Key authentication.
 */
export interface ApiKeySecurityScheme extends BaseSecurityScheme {
	type: 'apiKey';
	name: string;
	in: 'query' | 'header' | 'cookie';
}

/**
 * Security scheme for HTTP authentication.
 */
export interface HttpSecurityScheme extends BaseSecurityScheme {
	type: 'http';
	scheme: string;
	bearerFormat?: string;
}

/**
 * Security scheme for mutual TLS authentication.
 */
export interface MutualTLSSecurityScheme extends BaseSecurityScheme {
	type: 'mutualTLS';
}

/**
 * Security scheme for OAuth2 authentication.
 */
export interface OAuth2SecurityScheme extends BaseSecurityScheme {
	type: 'oauth2';
	flows: OAuthFlowsObject;
}

/**
 * Security scheme for OpenID Connect authentication.
 */
export interface OpenIdConnectSecurityScheme extends BaseSecurityScheme {
	type: 'openIdConnect';
	openIdConnectUrl: string;
}

/**
 * Defines a security scheme that can be used by the operations.
 * See: https://spec.openapis.org/oas/v3.1.0#security-scheme-object
 *
 * @example
 * {
 *   type: 'apiKey',
 *   name: 'api_key',
 *   in: 'header'
 * }
 */
export type SecuritySchemeObject =
	| ApiKeySecurityScheme
	| HttpSecurityScheme
	| MutualTLSSecurityScheme
	| OAuth2SecurityScheme
	| OpenIdConnectSecurityScheme;

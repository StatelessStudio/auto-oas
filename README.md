# Auto OpenApi Spec

Type interfaces for OpenAPI

## Contributing & Development

See [contributing.md](docs/contributing/contributing.md) for information on how to develop or contribute to this project!

## Import & use the OAS interfaces

You can import the TypeScript interfaces for OpenAPI from this project and use them to type OpenAPI documents or parts of documents.

Examples (adjust import paths depending on how you consume the library):

- Using the source in this repository (relative import in a TypeScript project):

```ts
import { OpenAPIObject, SchemaObject } from './src/oas/v3.1';

const doc: OpenAPIObject = {
	openapi: '3.1.0',
	info: { title: 'Sample API', version: '1.0.0' },
	paths: {}
};

const petSchema: SchemaObject = {
	type: 'object',
	properties: {
		id: { type: 'integer' },
		name: { type: 'string' }
	}
};
```

- If the package is published to npm (import path may vary depending on package exports):

```ts
// Example: if the package exposes the v3.1 index at the package root or a sub-path
import { OpenAPIObject } from 'auto-oas/oas/v3.1';

const doc: OpenAPIObject = {
	openapi: '3.1.0',
	info: { title: 'My API', version: '1.0.0' },
	paths: {}
};
```

Notes:

- The repository's `src/oas/v3.1/index.ts` re-exports all v3.1 interfaces (openapi, schema, path, components, etc.).
- If you import from the published package, check the package's published entry points (or `package.json` "exports") to determine the correct import path.

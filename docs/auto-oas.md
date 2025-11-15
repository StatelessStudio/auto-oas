# auto-oas: helpers & small utilities

This page documents the small helper functions provided in `src/auto-oas` that build OpenAPI (OAS) schema and parameter objects from validator/sanitizer instances.

These helpers are intentionally tiny and only aim to convert the validator/sanitizer shape used in the project into the corresponding OAS TypeScript interface shapes.

## What you'll find

- buildPropSchema(valsan): converts a single validator (RunsLikeAValSan) into a `SchemaObject`.
- buildObjectSchema(sanitizer): converts an `ObjectSanitizer` into an object `SchemaObject` with `properties`.
- buildParameter(name, valSan, location): builds a `ParameterObject` for path/query/header parameters.

## Importing

From the source in this repository (relative path):

```ts
import { buildPropSchema, buildObjectSchema, buildParameter } from '../src/auto-oas';
```

From the published package (example):

```ts
import { buildPropSchema, buildObjectSchema, buildParameter } from 'auto-oas';
// or (if package exposes sub-paths):
// import { buildPropSchema } from 'auto-oas/auto-oas';
```

The OAS interfaces used by these helpers are exported from `src/oas/v3.1`.

## Usage examples

- Build a property schema from a validator:

```ts
const schema = buildPropSchema(someValSan);
// `schema` is typed as SchemaObject
```

- Build an object schema from an `ObjectSanitizer`:

```ts
const objSchema = buildObjectSchema(someObjectSanitizer);
// objSchema: SchemaObject | undefined
```

- Build a parameter object:

```ts
const param = buildParameter('id', idValSan, 'path');
// param: ParameterObject
```

## Behavior notes

- buildPropSchema
  - Uses `valsan.type` when present; falls back to `'string'` when missing.
  - Collects developer/user `helperText` from the validator rules and, if any, sets `description` on the `SchemaObject` with values joined by `; `.

- buildObjectSchema
  - Iterates `sanitizer.schema` and runs `buildPropSchema` for each property.
  - Returns an object with `type: 'object'` and `properties` mapping.

- buildParameter
  - Builds a `ParameterObject` with `name`, `in`, `schema` and computes `required` from the `location` and `valSan.options?.isOptional`.

  - Copies `valsan.format` (when present) into the parameter's `schema.format`, so
    formats such as `date-time` or `email` are preserved in generated
    `ParameterObject`s.

## Examples in tests

See `test/spec/auto-oas` for concrete usage examples that run inside the test-suite. The tests demonstrate behavior with real `valsan` validators and composed validators.

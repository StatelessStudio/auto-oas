import { RunsLikeAValSan } from 'valsan';
import { SchemaObject } from '../oas/v3.1';

export function buildPropSchema(valsan: RunsLikeAValSan): SchemaObject {
	const type: string = valsan.type || 'string';
	const prop: SchemaObject = { type };
	const rules = valsan.rules();
	const userHints: string[] = [];

	if (valsan.format) {
		prop.format = valsan.format;
	}

	// Propagate example if present
	if (valsan.example) {
		prop.example = valsan.example;
	}

	for (const ruleKey in rules) {
		const rule = rules[ruleKey];

		if (rule.dev?.helperText) {
			userHints.push(rule.dev.helperText);
		}
		else if (rule.user?.helperText) {
			userHints.push(rule.user.helperText);
		}
	}

	if (userHints.length > 0) {
		prop.description = userHints.join('; ');
	}

	return prop;
}

import { RunsLikeAValSan } from 'valsan';
import { SchemaObject } from '../oas/v3.1';

export function buildPropSchema(valsan: RunsLikeAValSan): SchemaObject {
	const type: string = valsan.type || 'string';
	const prop: SchemaObject = { type } as SchemaObject;
	const rules = valsan.rules();
	const userHints: string[] = [];

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

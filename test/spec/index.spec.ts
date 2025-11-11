import 'jasmine';
import * as index from '../../src';

describe('auto-oas', () => {
	it('exports a', () => {
		expect(index.a).toBeTrue();
	});
});

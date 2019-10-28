const assert = require('assert');
const database = require('./database');

const DEFAULT_HERO = { 
	name: 'Flash', 
	power: 'Speed', 
	id: 1 
};

describe('Heroes manipulation', () => {
	it('Search heroes with files', async () => {
		const expected = DEFAULT_HERO;
		const [ result ] = await database.list(expected.id);

		assert.deepEqual(result, expected);
	})

	// it('Hero claim with files', async () => {
	// 	const expected = DEFAULT_HERO;

	// 	assert.ok(null, expected);
	// });
})
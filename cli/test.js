const assert = require('assert');
const database = require('./database');

const DEFAULT_HERO = { 
	name: 'Flash', 
	power: 'Speed', 
	id: 1 
};

const UPDATE_DEFAULT_HERO = {
	name: 'Iron Man', 
	power: 'Intelligence', 
	id: 3,
}

describe('Heroes manipulation', () => {
	// before(async () => {
	// 	await database.register(DEFAULT_HERO);
	// })

	it('Search heroes with files', async () => {
		const expected = DEFAULT_HERO;
		const [ result ] = await database.list(expected.id);

		assert.deepEqual(result, expected);
	})

	it('Hero registers with files', async () => {
		const expected = DEFAULT_HERO;
		await database.register(DEFAULT_HERO);
		const [actual] = await database.list(DEFAULT_HERO.id);

		assert.deepEqual(actual, expected);
	});

	it('Hero removes with file', async () => {
		const expected = true;
		const result = await database.delete(DEFAULT_HERO.id);

		assert.deepEqual(result, expected);
	});

	it('Hero updates with file', async () => {
		const expected = {
			...UPDATE_DEFAULT_HERO,
			name: 'Tony Stark',
			power: 'Money',
		};

		const heroUpdated = {
			name: 'Tony Stark',
			power: 'Money',
		}

		await database.update(UPDATE_DEFAULT_HERO, heroUpdated);
		const [result] = await database.list(UPDATE_DEFAULT_HERO.id);

		assert.deepEqual(result, expected);
	});
})
import Character from "../characters/character";
import Bowman from "../characters/Bowman";

test('should character to be created', () => {
  let character = new Character('Misha', 'Swordsman')

  expect(character.name).toEqual('Misha');
});

test('should character not be able to be created with invalid name', () => {
  expect(() => {
    new Character('Misha19911010', 'Swordsman')
  }).toThrow();
});

test('should character not be able to be created with invalid type', () => {
  expect(() => {
    new Character('Misha', 'Swordsman123123')
  }).toThrow();
});


test('should bowman to be alive', () => {
  let bowman = new Bowman('Misha')

  expect(bowman.health).toEqual(100);
});

test('should bowman to be defeat', () => {
  let bowman = new Bowman('Misha')
  bowman.damage(150)

  expect(bowman.health).toEqual(0);
});

test('the bowman should not be able to level up', () => {
  let bowman = new Bowman('Misha')
  bowman.damage(150)

  expect(() => {
    bowman.levelUp()
  }).toThrow();
});


test('the bowman should be able to level up', () => {
  let bowman = new Bowman('Misha')
  bowman.damage(28)
  expect(bowman.health).toEqual(79)
  bowman.levelUp()

  expect(bowman.level).toEqual(2)
  expect(bowman.health).toEqual(100)
  expect(bowman.defence).toEqual(30)
  expect(bowman.attack).toEqual(30)
});


test('the character should be able to level up', () => {
  let bowman = new Character('Misha', 'Bowman')
  bowman.damage(100)
  expect(bowman.health).toEqual(1)
  bowman.levelUp()

  expect(bowman.level).toEqual(2)
  expect(bowman.health).toEqual(100)
  expect(bowman.defence).toEqual(1.2)
  expect(bowman.attack).toEqual(1.2)
});

test('the defeated character should not be able to get damage', () => {
  let bowman = new Character('Misha', 'Bowman')
  bowman.damage(150)
  expect(bowman.health).toEqual(0)
  bowman.damage(150) // nothing to be done
  expect(bowman.health).toEqual(0)
});
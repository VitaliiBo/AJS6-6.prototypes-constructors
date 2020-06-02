/* eslint-disable linebreak-style */
/* eslint-disable no-new */
import { Character } from './module';

test('Creating Character with wrong name', () => {
  expect(() => { new Character('f', 'Zombie'); }).toThrowError(new Error('Имя должно быть длиннее 2х и меньше 10ти символов'));
});
test('Creating Character with wrong name', () => {
  expect(() => { new Character('Davie504', 'BassPlayer'); }).toThrowError(new Error('Нет такого персонажа'));
});
test('Creating Character & do damage', () => {
  const player = new Character('foo', 'Bowman');
  player.damage(15);
  expect(player).toEqual({
    name: 'foo',
    type: 'Bowman',
    attack: 25,
    defence: 25,
    health: 88.75,
    level: 1,
  });
});

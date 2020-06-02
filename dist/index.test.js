"use strict";

var _module = require("./module");

/* eslint-disable linebreak-style */

/* eslint-disable no-new */
test('Creating Character with wrong name', function () {
  expect(function () {
    new _module.Character('f', 'Zombie');
  }).toThrowError(new Error('Имя должно быть длиннее 2х и меньше 10ти символов'));
});
test('Creating Character with wrong name', function () {
  expect(function () {
    new _module.Character('Davie504', 'BassPlayer');
  }).toThrowError(new Error('Нет такого персонажа'));
});
test('Creating Character & do damage', function () {
  var player = new _module.Character('foo', 'Bowman');
  player.damage(15);
  expect(player).toEqual({
    name: 'foo',
    type: 'Bowman',
    attack: 25,
    defence: 25,
    health: 88.75,
    level: 1
  });
});
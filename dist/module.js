"use strict";

require("core-js/modules/es.function.name");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Character;

function Character(name, type) {
  var types = {
    'Bowman': {
      attack: 25,
      defence: 25
    },
    'Swordsman': {
      attack: 40,
      defence: 10
    },
    'Magician': {
      attack: 10,
      defence: 40
    },
    'Undead': {
      attack: 25,
      defence: 25
    },
    'Zombie': {
      attack: 40,
      defence: 10
    },
    'Daemon': {
      attack: 10,
      defence: 40
    }
  };

  try {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Имя должно быть длиннее 2х и меньше 10ти символов');
    }

    this.name = name;
    this.type = type;

    if (types.hasOwnProperty(type)) {
      this.attack = types[type].attack;
      this.defence = types[type].defence;
    } else {
      throw new Error('Нет такого персонажа');
    }
  } catch (error) {
    console.log(error);
  }

  this.health = 100;
  this.level = 1;

  Object.prototype.damage = function (points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }

    console.log(this);
  };
}
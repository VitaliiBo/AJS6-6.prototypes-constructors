/* eslint-disable linebreak-style */
/* eslint-disable no-extend-native */
/* eslint-disable no-useless-catch */
/* eslint-disable import/prefer-default-export */
export function Character(name, type) {
  const types = {
    Bowman: {
      attack: 25,
      defence: 25,
    },
    Swordsman: {
      attack: 40,
      defence: 10,
    },
    Magician: {
      attack: 10,
      defence: 40,
    },
    Undead: {
      attack: 25,
      defence: 25,
    },
    Zombie: {
      attack: 40,
      defence: 10,
    },
    Daemon: {
      attack: 10,
      defence: 40,
    },
  };
  try {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Имя должно быть длиннее 2х и меньше 10ти символов');
    }
    this.name = name;
    this.type = type;
    // eslint-disable-next-line no-prototype-builtins
    if (types.hasOwnProperty(type)) {
      this.attack = types[type].attack;
      this.defence = types[type].defence;
    } else {
      throw new Error('Нет такого персонажа');
    }
    this.health = 100;
    this.level = 1;
    Object.prototype.damage = function (points) {
      if (this.health >= 0) {
        this.health -= points * (1 - this.defence / 100);
      }
    };
  } catch (error) {
    throw error;
  }
}

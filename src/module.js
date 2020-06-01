function Character(name, type) {
    Object.prototype.defaultCharacter = {
        health: 100,
        level: 1,
        type: {
           'Bowman': [ 25, 25 ],
           'Swordsman': [ 40, 10 ],
           'Magician': [ 10, 40],
           'Undead': [ 25, 25 ],
           'Zombie': [ 40, 10 ],
           'Daemon': [ 10, 40 ],
        },
    }
    try {
        if ( name.length < 2 || name.length > 10) {
            throw new Error('Имя должно быть длиннее 2х и меньше 10ти символов');
        }

    } catch (error) {
        console.log(error);
    }

    this.name = name;
    this.type = type;
  }

  console.log(new Character('B', 'Daemon'));
  
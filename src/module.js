function Character(name, type) {
    Object.prototype.defaultCharacter = {
        health: 100,
        level: 1,
        type: {
           'Bowman': {
               attack: 25,
               defence: 25,
           },
           'Swordsman': {
                attack: 25,
                defence: 25,
            },
           'Magician': {
                attack: 25,
                defence: 25,
             },
           'Undead': {
                attack: 25,
                defence: 25,
            },
           'Zombie': {
                attack: 25,
                defence: 25,
            },
           'Daemon': {
                attack: 25,
                defence: 25,
            },
        },
    }
    try {
        if ( name.length < 2 || name.length > 10) {
            throw new Error('Имя должно быть длиннее 2х и меньше 10ти символов');
        }
        const types = Object.prototype.defaultCharacter.type
        this.name = name;
        this.type = type;
        for (const item in types) {
            if ( type === item ) {    
                 this.attack = types[item].attack;
                 this.defence = types[item].defence;                
            }
        }
    } catch (error) {
        console.log(error);
    }

    
  }

  console.log(new Character('R2D2', 'Daemon'));
  
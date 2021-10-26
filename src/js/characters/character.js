class Character {
    constructor(name, type) {
        if (name.length < 2 || name.length > 10) {
            throw new Error('Incorrect name')
        }

        switch(type) {
            case 'Bowman':
            case 'Swordsman':
            case 'Magician':
            case 'Daemon':
            case 'Undead':
            case 'Zombie':
            break;
            default:
                throw new Error('Incorrect type \'' + type + '\'');
        }

        this.name = name;
        this.type = type;

        this.level = 1;
        this.attack = 1;
        this.defence = 1;
        this.health = 100;
    }


    levelUp() {
        if (this.health <= 0) {
            throw new Error('cannot level up of defeated character')
        } else {
            this.level++;
            this.attack *= 1.2;
            this.defence *= 1.2;
            this.health = 100;
        }
    }

    damage(points) {
        if (this.health > 0) {
            this.health -= points * (1 - this.defence / 100)
            this.health = Math.max(0, this.health) // меньше нуля тоже быть не может, поэтому зануляем в случае, если полученный урон >= уровня здоровья
        }
    }
}


export default Character;
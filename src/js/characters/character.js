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

        this.attack = undefined;
        this.defence = undefined;
        this.level = undefined;
        this.health = undefined;
    }
}


export default Character;
import Character from "./character";

class Magician extends Character {
    constructor(name) {
        super(name, 'Magician');

        this.health = 100;
        this.level = 1;
        this.attack = 10;
        this.defence = 40;
    }
}

export default Magician;
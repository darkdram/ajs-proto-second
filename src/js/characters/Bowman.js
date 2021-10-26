import Character from "./character";

class Bowman extends Character {
    constructor(name) {
        super(name, 'Bowman');

        this.health = 100;
        this.level = 1;
        this.attack = 25;
        this.defence = 25;
    }
}

export default Bowman;
class Character {

    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }

    attack() {
        return 'attack with ' + this.weapon;
    }
}

class Elf extends Character {
    constructor(name, weapon, type) {
        super(name, weapon)
        this.type = type
    }
}

const dolby = new Elf('Dolby', 'cloth', 'house')

dolby.attack()


class Ogre extends Character {

    constructor(name, weapon, color) {
        super(name, weapon)
        this.color = color
    }

    makeFort() {
        return 'strongest fort in the world makde'
    }
}

const shrek = new Ogre('shrek', 'club', 'green')
shrek.makeFort()


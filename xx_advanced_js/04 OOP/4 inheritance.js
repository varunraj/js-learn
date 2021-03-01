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

Ogre.prototype.isPrototypeOf(shrek) // true
Character.prototype.isPrototypeOf(Ogre.prototype) // true

// instanceOf

dolby instanceof (Elf) // true
dolby instanceof (Ogre) // false
dolby instanceof (Character) // true

// we dont have private and public variable/methods in ES2016
// we need to use typescript for private/public



// 4 Pillars of OOP

// Encapsulation - > Wrap methods and data together
// Abtraction -> Hide all complexity in class implemenation
// Inheritance
// Polymorphism. -> we can overwrite attack in Elf. then attack works in two different ways depending on who calls it.


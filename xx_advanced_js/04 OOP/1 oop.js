// Why OOP or FP ?
// 1. Clear and Understadable
// 2. Easy to extend
// 3. Easy to Maintain
//4. Memory Efficient
//5. DRY.

// Make complex code organized.

//OOPS - Real world modelling. Data and methods on data sits together.

// Class based Programming languages and protype based lang . JS is prototype based.

// ASsume we want to create a bunch of characaters for a game

// approach 1

const elf = {
    name: 'Orwell',
    weapon: 'bow',
    attack() {
        return 'attack with ' + elf.weapon
    }
}

elf.name
elf.attack() // attack with bow.

// we need multiple elfs. We can use a factory function

function createElf(name, weapon) {

    return {
        name,
        weapon,
        attack() {
            return 'attack with weapon' + weapon
        }
    }
}
const peter = createElf('peter', 'knife')
peter.attack();


// Issue above is we are repeating attack in each object. We can solve this using Object.create()

const elfFunction = {
    attack() {
        return 'attack with ' + this.weapon
    }
}

function createElf(name, weapon) {

    let newElf = Object.create(elfFunction) // this will set __proto__ of new object to elfFunction
    newElf.name = name;
    newElf.weapon = weapon

}

const peter = createElf('Peter', 'stones')
peter.attack() //
const sam = createElf('Sam', 'fire')
sam.attack()  // attack is not repeated.


// We didnt had Object.create first. So we used contructor functions

function Elf(name, weapon) {
    this.name = name;
    this.weapon = weapon
}

// attacj methods to prototype.

Elf.prototype.attack = function () { return 'attach with' + this.weapon } // anonymous function wont work here.

peter = new Elf('peter', 'stones')
peter.name // peter
peter.attack()


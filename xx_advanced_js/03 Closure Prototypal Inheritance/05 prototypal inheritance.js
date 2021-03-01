// inheritance is a about getting code from another object
// array and functions prototypal inherited from object.

const array = []
array.__proto__ // shows the prototype of the array object.

array.__proto__.__proto__ // points to object prototype. This is where toString is defined.


function a() { }
a.__proto__ // points to function proto
a.__proto__proto__ // points to object

const obj1 = {}
obj1.__proto__ // points to object prototype.


///

let dragon = {
    name: 'Tan',
    fire: true,
    fight() {
        return 5
    },
    sing() {
        if (this.fire) {
            return `I am ${this.name}, the breather of fire`
        }

    }
}

dragon.sing() // I am Tan, breather of fire

let lizard = {
    name: 'Kiki',
    fight() {
        return 1
    }
}

// One way to get methods from dragon is by binding

const singLizard = dragon.sing.bind(lizard)
singLizard() //  I am kiki the breather of fire

// how can we have lizzard inherit everything from dragan
// we can use proto inheritance

lizard.__proto__ = dragon;
lizard.sing() // I am kiki the breather of fire.
lizard.fight() // returns 1. Override anything already declared.

dragon.__proto__ // points to Object {}
dragon.isProtoTypeOf(lizard) // true

for (let prop in lizard) {
    console.log(prop) // shows name, fight, sing,fire 
}

for (let prop in lizard) {
    if (lizard.hasOwnProperty(prop)) {
        console.log(prop) // shows name, fight
    }

}


// WE SHOULD SET __proto__ DUE TO PERFORMANCE REASONS.

let human = {
    mortal: true
}

let socrates = Object.create(human)// this will inherit from human.

console.log(socrates)// empty
socrates.age = 45
socrates.mortal // true.
human.isProtoTypeOf(socrates) // true

// __proto__ points to the prototype of parent. But prototype is a proporty on the define function itselt. strings and arrays created wont have a prototype property. only functions will have it.

function a() { }
a.prototype.name = "kk"

let person1 = new a();
person1.name // kk

// Add a new method lastYear() to a date object.


Date.prototype.lastYear = function () { return this.getFullYear() - 1 } // getfullyear is a built in function. Using an arrow function wont work here.
date1 = new Date.name('1990-10-03')
date1.lastYear() // 2020.


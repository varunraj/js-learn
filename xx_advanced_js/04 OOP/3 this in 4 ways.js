// new binding this

function Person(name, age) {
    this.name = name;
    this.age = age
}

const person1 = new Person('tom', 21)
person1// 

// implicit binding

const person = {
    name: 'Karen',
    age: 40,
    hi() {
        console.log('hi' + this.name
        )
    }
}

// explicit binding using bind/call/

const person = {
    name: 'Karen',
    age: 40,
    hi: function () {
        console.log('hi' + this.name
        )
    }.bind(window) // this will not use Karen as the name
}

// arrow functions -> lexical this


const person = {
    name: 'Karen',
    age: 40,
    hi: () => {
        console.log('hi' + this.name)
    } // this will not use Karen as the name
}


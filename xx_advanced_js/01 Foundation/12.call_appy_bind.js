function a () {
    console.log('hi')
}

a.call() // 'hi' -> So call() is how all functions are called a() === a.call()
a.apply() // 'hi -> same as call

// game with chars as below

const wizard = {
    name : 'Merlin',
    health :100,
    heal(num1, num2) {
       return this.health += num1+num2 // replenish health
    }
}

wizard.heal(60,60) // get 220

const archer = {
    name : 'Robin Hood',
    health :30
}

// we need to borrow heal from wizard in archer (dry)

wizard.heal.call() // get wizard health
console.log('1', archer)  //{ name : 'Robin Hood', health: 30}
console.log(wizard.heal.call(archer,50,30))  // we can substitute the object on which health is declred
                                             // 50 and 30 are params to heal.
console.log('2', archer) //{ name : 'Robin Hood', health: 110}

// So used call to bind another obect to the method we called.

// apply() also does the same as call(), it just that it takes an array of params


console.log(wizard.heal.apply(archer,[50,30]))


// bind() => call() and apply() immediately runs the function. But bind() returns a new function 
// with object context changed.

wizard.heal.bind(archer, 100, 30)
console.log(archer) // { name : 'Robin Hood', health: 30} does not return see updated value
// It didt run the function.

const healArcher = wizard.heal.bind(archer, 100, 30)
healArcher()
console.log(archer) // { name : 'Robin Hood', health: 160}

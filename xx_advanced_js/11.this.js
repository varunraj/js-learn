// this is the object that the function is a property of 

this // return window object in browser console.

function a () {
    console.log(this)  // return window again. because window is the object where function a is a property of 
}

function b(){
    'use strict'
    console.log(this) // return undefined. 
}

const obj = {
    name : 'Billy',
    sing: function() {
        return 'lalal' + this.name // here this is the object obj on which function is a property of.
    },
    check: this.name // this wont give access to this keyword 
}


// 


const a = function() {
    console.log('a', this) // window
    const b = function(){
        console.log('b', this) // window. because this function is still with window object
                                // and not inside another object.
        const c = {
            hi: function(){
                console.log('c', this) // {hi:f}
           }           
        }
        c.hi()
    }
    b()
}

a()


///

const obj = {
    name : 'Billy',
    sing: function() {
        console.log('a', this) // {name: 'Billy, sing: f} 
        var anotherFunction = function() {
            console.log('b', this) // window. Why we got window  here ? weiredJS. See below
        }
        anotherFunction()
    }
    }

obj.sing() //

// Everything is js is lexically scoped ( where it is written ) and not dynamically scoped (where it is called)
// Exception to this rule is 'this' keyword. It is dynamically scoped. 

// For above example another function is called inside sing function. There is nothing attached
// on left as a object. So it defaulted to window.


// We can solve this by using arrow function

// ARROW FUNCTION have lexically bound behavior for 'this' keyword.

const obj = {
    name : 'Billy',
    sing: function() {
        console.log('a', this) // {name: 'Billy, sing: f} 
        var anotherFunction = () => {
            console.log('b', this) // {name: 'Billy, sing: f}
        }
        anotherFunction()
    }
    }

obj.sing() //

// before es6 arrow, we solved this by binding as below.

const obj = {
    name : 'Billy',
    sing: function() {
        console.log('a', this) // {name: 'Billy, sing: f} 
        var anotherFunction = function () {
            console.log('b', this) // {name: 'Billy, sing: f}
        }
        anotherFunction.bind(this)() // bind this to anotherFunction
    }
    }

obj.sing() //

// 2nd way to solve this.

const obj = {
    name : 'Billy',
    sing: function() {
        console.log('a', this) // {name: 'Billy, sing: f} 
        var that = this ;
        var anotherFunction = function () {
            console.log('b', that) // {name: 'Billy, sing: f}
        }
        anotherFunction() // bind this to anotherFunction
    }
    }

obj.sing() //
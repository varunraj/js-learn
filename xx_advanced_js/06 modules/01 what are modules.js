// seperation of concern. Small parts are created seperate and brought together to make a large application.

// we have a big file with so many global variables. This can pollute global name space and create memory leaks

// Global Scope
// Module Scope
// Function Scope
// Block Scope

// We can share things without going to global scope.

(function () {

    var a = 'a'
    var b = 'b'
    function display(a, b) {
        console.log(a, b)
    }

    display('hello', 'world')

})()

// Use IIFE (Immediately invoked function expression), we created a module above. All those variable and functons are not in global scope,

// what if we need to expose display function


var displayModule = (function () {

    var a = 'a' // closure 
    var b = 'b'
    function display(a, b) {
        console.log(a, b)
    }

    display('hello', 'world')

    return {
        display: display // public api/interface
    }

})()  // dsiplay Module makde a and b provide and exposed display function

displayModule.display() // access display in global scope 



// run below on chrome console


this === window // true. This is the global execution context

// in node, inital execution context is 'global'

// every function will have its own execution context also.

var a = true // in console

// now window object will have a variable 'a'



// Lexical Environment/Scope

function printName(){
    return "hello"
}

function a(){
    function b(){
        var a = 10
    }
}

// above code, function printName and function a in global lexical env
// but functiob b is in lexical env of function 'a'.


//IMP: In JS, our lexical scope (available data and variables where the function is defined)
// determines our available variables. Not where the function is called (dynamic scope);



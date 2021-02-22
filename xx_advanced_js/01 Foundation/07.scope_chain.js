// inside each execution context there is a link to the lexical context where 
// function sits.

var x = x; // all functions below will get x

function findName() {
    console.log(x) // this will work because of scope chain.
                    // scope chain will give access to parent environment.
    var b = 'b';
    return printName();
}

function printName(){
    var c ='c'
    return 'Varun Raj'
}

function sayMyName(){
    var a = 'a'
    return findName()
}

sayMyName();

// our lexical scope determines available variable. Not where function 
// is called (dynamic scope)

// it will look backwards in scope chain until it reaches global scope.



function sayMyName(){
    var a = 'a' // b and c not visible
    return function findName(){
        var b = 'b'; // c not visible
        return function printName() {
            var c ='c' // all visible , it look back in chain.
            return 'Varun Raj'
        }
    }
}

sayMyName()()()



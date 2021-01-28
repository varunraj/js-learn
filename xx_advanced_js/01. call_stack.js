
// Call Stack: This is a stack inside JS engine that keep track of program execution


// Add below code to chrome snippets and use play button to step through function - lecture 15


function subtractTwo(num) {
    return num -2
}

function addSomething(){
    const a = 10;
    subtractTwo(a)
}

debugger;
addSomething()


// We can see call stack and how addSomething and subtractTwo are added to the stack and pulled from top


// STACK OVERFLOW

function inception(){
    inception() // recursion call
}

// Running above code will return stack overflow.


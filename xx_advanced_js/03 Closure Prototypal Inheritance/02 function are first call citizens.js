// Why functions are first class citizens

// 1. functions can be assinged to variables

var stuff = function () { }

// 2. functions can be passed to another function as a variable

function a(fn) {
    fn()
}

a(() => console.log('hello'))// passed function to another fn

// 3. can return function as a value

function b() {
    return function () { console.log('bye') }
}

b()()// get bye
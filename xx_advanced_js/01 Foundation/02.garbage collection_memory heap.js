// Memory heap is the place in memory allocated by JS engine to run our code
// This is where all variable are declared.

// When memory is not needed, garbage collection happens.

const num = 10
const str = "some text";
var human = {
    first: 'Varun',
    last: 'Raj'
}

human = 5 // now we no longer need the inital object  pointed to human and it will be
// garbage collected from memory heap.


function test() {
    var x = 10
}

// after test is run, var x is garbage collected.


// Memory Leak

let array = []

for (let i=5; i>1; i++){
    array.push(i-1)
}

// Above code will create infinite loop and hense memory leak.


// Gloabal Variable

var a = 1 ; // we added a to gobal scope. and they need to stay there since it is not inside a function 
// where we can garbage collect once function is executed.


// event listeners

var elememt = document.getElementById('button')
elememt.addEventListener('click', onClick) // we added event listener and dont remove when we dont need it

// setInterval

setInterval(()=>{
    // referene objects. this wont be garbage collected.
}, 2000)


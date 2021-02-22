// variables and function declarations are hoisted


console.log('1------')
console.log(teddy) // teddy will print as undefined.

var teddy = 'bear'

sing() // function will run even before declared

// function declaration
function sing() {
    console.log('ohh la la..')
}

// There is a creation phase and execution phase. In creation, all var and function 
// will be allocated memory. 

// we can avoid this by using const and let for variable declaration.

// functions are fully hoisted all time.

(function sing() {
    console.log('ohh la la..')
})    // this wont be hoisted since it is wrapped in brackets.




// function expression

sing2()

const sing2 = function() {
    console.log('lala')
}

// above function wont be hoisted and we get an error if we call it before declaration line. 




// Hosting Excersise


var favouriteFood = 'grapes'

var foodThoughts = function () {
    console.log("Original fav food: ", favouriteFood)
    var favouriteFood = "sushi"
    console.log("New fav food: ", favouriteFood)
}

foodThoughts()

// first console.log will return 'undefined' because inside the lexical context on foodThoughts
// favoriteFood variable is hoisted to top and will return undefined.

// hoisting happens in every execution context.





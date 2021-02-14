// function currying 

function multiply(a, b) {
    return a * b 
}

// currying is partically giving a parameter to function

let multiplyByTwo = multiply.bind(this,2) // we passed one param

console.log(multiplyByTwo(4)) // we get 8

let multiplyByTen = multiply.bind(this,10)

console.log(multiplyByTen(4)) // we get 40
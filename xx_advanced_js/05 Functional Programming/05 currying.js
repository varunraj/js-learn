const mutiply = (a, b) => a * b
multiply(3, 4)

// let us change to take one parameter at a time

const curriedMultiply = (a) => (b) => a * b

curriedMultiply(5)(3) // this works due to closure

const curriedMultiplyBy5 = curriedMultiply(5) // 5 version
const curriedMultiplyBy10 = curriedMultiply(10) // 10 version

// It is similar to methods on classes. It is the common part between objects. In curry, it is the common logic between curried version.

// Partial Application -> Partially apply a function

// Take a function and apply some of the arguments

const curriedMultiply = (a) => (b) => (c) => a * b * c

curriedMultiply(3)(4)(5)

// same using partial application 

const partialMultiplyBy5 = curriedMultiply(5)
partialMultiplyBy5(6)(7) // 

// Another way 

const multiply = (a, b, c) => a * b * c
const partialMultiplyBy5 = multiply.bind(null, 5) // apply only one param

partialMultiplyBy5(4, 10) // apply second and third param.


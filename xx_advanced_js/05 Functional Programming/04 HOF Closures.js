// HOF and Clsoures in JS because functions are first class citizen.

// HOF -> take one ore more functions as argument or return a function 

const hof = () => () => 5

hof() // returns a function
hof()() // 5

const hof1 = (fn) => fn(5)
hof1((x) => x) // 5

// closure -> mechanism for containing state in fp

const closure = function () {
    let count = 0
    return function increment(params) {
        count++
        return count;
    }
}

const increment = closure()
increment() // 1
increment() // 2
increment() // 3

// In above example, increment is impure. We only get the count instead of modify, we can make pure.

// We were able to create private variable in above case.

const closure = function () {
    let count = 55
    return function getCounter(params) {
        return count;
    }
}

// above function is pure and also have a private variable.
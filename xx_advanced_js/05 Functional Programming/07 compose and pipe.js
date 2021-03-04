// Composition is the idea that any data transformation we do should be obious like a assembly line

// data -> fn -> data -> fn -->

// we want to do two things - > multiply and then absolute

const compose = (f, g) => (data) => f(g(data)) // make a compose assembly line
const multiplyBy3 = num => num * 3  // function 1
const makePositive = num => Math.abs(num) // function 2
const multiply3AndAbsolute = compose(multiplyBy3, makePositive); // data passed to multiply3AndAbsolute is sent to f1 and then to f2.
multiply3AndAbsolute(-50)

// pipe is simlar to compose except it goes from left to right

const pipe = (f, g) => (data) => g(f(data))

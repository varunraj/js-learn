// idempotent : Always do the same thing.

function notGood() {
    return Math.random()
}

notGood() // new number every time.

function notGood1(num) {
    console.log(num)
}

notGood1(5) // eventhough it is not pure it is idempotent.

// http get request is an example of idempotent.

// being idempotent imp for parallal executions.

// Imperative Vs declarative

// Declarative -> tell what to do and not how to do. Humans are
// declarative and computer machine code is imperative. As we go 
// higher up , it becomes more declarative.

// below for loop is imperative
for (let i = 0; i < 1000; i++) {
    console.log(i)
}

// below code is more declarative. 
[1, 2, 3].forEach((item) => console.log(item))


// Immuntability -> not changing the state. Make copies of the state and return a new one

const obj = { name: 'Tom' }

function clone(obj) {
    return { ...obj } // pure
}

obj.name = 'Andy' // we dont want to do this in FP.

// instead do below

function updateName(obj) {
    const objNew = clone(obj)
    objNew.name = 'Rami'
    return objNew;
}



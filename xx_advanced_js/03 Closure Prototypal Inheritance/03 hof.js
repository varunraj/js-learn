// functions that take function as arg or return another function is called HOF.


function letAdamLogin() {
    let array = []
    for (let i = 0; i < 100000, i++) {
        array.push(i)
    }

    return 'access granted to adam'
}

letAdamLogin() // sample authentication function.

function letEvaLogin() {
    let array = []
    for (let i = 0; i < 100000, i++) {
        array.push(i)
    }

    return 'access granted to eva'
}

letEvaLogin() // sample authentication function.

// Issue with above code is it is not DRY.

// Approach 1 -> Make function generic.


const giveAccessTo = (name) => {
    return 'Access granted to ' + name
}


function letUserLogin(user) { // We tell function what data to use
    let array = []
    for (let i = 0; i < 100000; i++) {
        array.push(i)
    }

    return giveAccessTo(user)
}

letUserLogin('adam')
letUserLogin('eva') // we have more flexibility with data.


// Approach 2 

// what if we also have admin. Above code has to accept admin which also need to have some admin security logic.

function letAdminLogin(admin) { // We tell function what data to use
    let array = []
    for (let i = 0; i < 500000; i++) {
        array.push(i)
    }

    return giveAccessTo(admin)
}

// this is where hof comes into play
// below example use passing function to another function.

function authenticate(number) {
    let array = []
    for (let i = 0; i < number; i++) {
        array.push(i)
    }

    return true
}



function letPerson(person, fn) {
    if (person.level === 'admin') {
        fn(500000)

    } else if (person.level === 'user') {
        fn(100000)
    }
    return giveAccessTo(person.name)

}

letPerson({ level: 'user', name: 'Tim' }, authenticate)

// We gainer the power not only make data during run time rather the 
// what to do also dynamic.


// Another Example

const multilyBy = (multiplier) => {
    return (number) => {
        return number * multiplier
    }
}

multiplyByTwo = multilyBy(2)
multiplyByThree = multilyBy(3)

multiplyByThree(5) // 15
multiplyByTwo(5) //10



// below code is used in 04 closure file -> towards end

let counter = 0;

function incrementCounter() {
    counter++
    return counter
}

module.exports = incrementCounter;
// closures are a combination of functions a first class citizens and the lexical scope ( access to variable where code is written )

// closure allow access to variable even after leaving the lexical scope in which it was declared. 

function a() {
    let grandpa = 'grandpa' // closure
    return function b() {
        let father = 'father' // closure
        let random = 123456 // this will be garbage collected
        return function c() {
            let son = 'son'
            return `${grandpa}> ${father} > ${son}`
        }
    }
}

const one = a()
const two = one()
const three = two() // grandpa > father > son

// we can see that grandpa and father is not garbage collected.


function callMeMayBe() {
    const callMe = 'hello hello' // closure
    setTimeout(() => {
        console.log(callMe)
    }, 2000)
}



// CLOSURE IS MEMORY EFFICIENT AND IT WILL HELP IN ENCAPSULATION

function heavyDuty(index) {
    const bigArray = new Array(7000).fill(':-)') // array with 7k items
    return bigArray[index];
}

heavyDuty(688);
heavyDuty(688)
heavyDuty(688)

// we created big array 3 times and distroyed.

// Better way

function heavyDuty2() {
    const bigArray = new Array(7000).fill(':-)') //closure

    return function (index) {
        return bigArray[index];
    }

}

const getHeavyDuty = heavyDuty2()
getHeavyDuty(688)
getHeavyDuty(700)
getHeavyDuty(800)

// Above code will create only one bigArray


// Encapsulation

const makeNuclearButton = () => {
    let timeWithoutDestruction = 0;
    const passTime = () => timeWithoutDestruction++
    const totalPeaceTime = () => timeWithoutDestruction
    const launch = () => {
        timeWithoutDestruction = -1
        return 'boom'
    }
    setInterval(passTime, 1000)

    return {
        launch: launch,
        totalPeaceTime: totalPeaceTime
    }
}

const ohno = makeNuclearButton();
ohno.totalPeaceTime() // 0
ohno.totalPeaceTime() //12 // 12 seconds elapsed
ohno.launch()// 'boom'
ohno.totalPeaceTime() // 1 time resets

// We were able to hide timeWithoutDistruction. We were able to encapsulate data. This is a benefit of closure.

// We can see module use closure for encapulation.

const cnt = require('./03 hof')
setInterval(() => console.log(cnt()), 1000) // we can see counter is getting incremented which is encapsulated in another module.



// IMP INTERVIEW QUESTION

const array = [1, 2, 3, 4];
for (var i = 0; i < array.length; i++) {
    setTimeout(function () {
        console.log('I am at index ' + i)
    }, 3000)
}

// Running above code will return the value 'I am at index 4', 4 times 

// We can solve this by chaning var to let

const array = [1, 2, 3, 4];
for (let i = 0; i < array.length; i++) {
    setTimeout(function () {
        console.log('I am at index ' + i)
    }, 3000)
}

// we can also use closure

const array = [1, 2, 3, 4];
for (var i = 0; i < array.length; i++) {

    (function (closureI) {
        setTimeout(function () {
            console.log('I am at index ' + closureI)
        }, 3000)
    })(i) // we pass into function i which will act as a closure 
}
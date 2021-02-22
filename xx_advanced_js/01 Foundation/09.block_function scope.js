

if (5>4) {
    var secret = '12345'
}

secret; // secret is avaiable since js uses function scope and not block scope
// when used with var

if (5>4) {
    let secret = '12345'
}

secret // not available with let and const


function loop() {
    for (var i=0; i < 5; i++) {
        console.log(i)
    }

    console.log('final',i)
}

loop(); // we get 1,2,3,4,5 and 5

function loop1() {
    for (let i=0; i < 5; i++) {
        console.log(i) // i will be block scope;
    }

    console.log('final',i)
}

loop1() // reference error for i for last console



// Ways to define and call a function

// method 1

function one() {
    return 1
}

one()

//method 2 

const obj = {
    two() {
        return 2
    }
}

obj.two()

// method 3

function three() {
    return 3
}

three.call();


//method 4

const four = new Function('num', 'return num') // this is function constructor. first part is parameter and second is body in string

four(4)// returns 4


//FUNCTIONS ARE ALSO OBJECTS (SPECIAL CALLABLE OBJECTS)

function woohoo() {
    console.log('woohooo')
}

woohoo.yell = 'ahhh' // we can do this as if woohoo is an object


// underneath the hood it is something like
const specialObj = {
    yell: 'ahhh',
    name: 'woohoo', // a name property which is optional
    //(): console.log(woohoo) -> a piece of code we can invoke
    call: '',
    appy: '',
    bind: '' // these are methods on this object
}

// Since functions are objects, we can pass them around as data.



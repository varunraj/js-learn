//  'use strict' will prevent unpredicable behaviors

function weired() {
    height = 50 // without var, let or const
    return height
}

weired()

// above code will run with out any issue and also height will be declared in global scope
// we can avoid this be using the key word 'use strict' on top, which will show correct error.


var heyhey = function doodle () {
    //dosomething
    return 'heyhey'
}

heyhey() // return heyhey
doodle() // reference error 
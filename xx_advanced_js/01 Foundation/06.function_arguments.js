
// function arguments can be accessed inside function

function marry(person1, person2){
    console.log(arguments) // this will return {0:'Tom, 1:'Tina'}
    console.log(Array.from(arguments))
    // now we can use array methods on arguments;
}

marry('Tom','Tina')


// we can expand args using es6 syntax.

function marry2(...args){
    console.log(args) // this will return ['Tom, 'Tina']
    
    // now we can use array methods on arguments;
}
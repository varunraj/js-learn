// Pure Functions
// - Return same output for a given inpute
// - no side effects -> dont change anything outside

const array = [1, 2, 3]
function mutateArray(arr) {
    arr.pop()
}

mutateArray(array)// undefined.
console.log(array) // [1,2]

// This function have side effects. 
// We are using a shared state that can interact with anything. This can cause lot of bugs.  How can make it not have any side effects.

function removeLastItem(arr) {
    const newArray = [...arr]
    newArray.pop()
    return newArray;
}

// above function dont have any side effects

removeLastItem(arr)
console.log(arr) // [1,2,3] // no side effects on arr.


// no side effects for multiplyBy2

function multiplyBy2(arr) {
    return arr.map((item) => item * 2) // new array is created from map.

}

// below function have side effects. It changes as per the env it runs
function a() {
    console.log('hi')
}


// Idea of FP is to minimize side effects. If there is a bug we need to focus on few areas. side effects are not bad. But miniming them will help to make code better and less bugs.


// Functon should have below chars

// - 1 Task
// - 2. return statement
// - 3. Pure
// - 4. No shared state
// - 5. Immuntable State
// - 6. Composable
// - 7. Predictable


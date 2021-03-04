// cache the result that is already calculated.

function addTo80(n) {
    console.log('takes long time')
    return n + 80
}

addTo80(5)
addTo80(5)
addTo80(5)

// we are running the same calculation 3 times even though it is the same.

let cache = {};

function memoizeAddto80(n) {
    if (n in cache) {
        return cache[n]
    } else {
        console.log('long time')
        cache[n] = n + 80
        return cache[n]
    }

}

memoizeAddto80(5) // 'long time'
memoizeAddto80(5) // it wont be executed again. It is taken from cache. Dont see 'long time'


// IMPROVE TO HAVE CACHE INSIDE AS A CLOSURE



function memoizeAddto80(n) {

    let cache = {};
    return function (n) {
        if (n in cache) {
            return cache[n]
        } else {
            console.log('long time')
            cache[n] = n + 80
            return cache[n]
        }
    }
}

const memoized = memoizeAddto80()
memoized(2)
memoized(2) // taken from cache.


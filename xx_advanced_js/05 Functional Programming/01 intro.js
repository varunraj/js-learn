// in FP, we dont combine data and function as one piece.

// Goals of FP is also same as that of OOP

// - clear + understandable
// - Easy to extend
// - Easy to maintain
// - Memory Efficient
// - DRY

// Pure Functions is the core concept. There is a seperation between data and behavior. All objects in FB are immutable. Once it is created, it cannot be changed. State remains.

// These restaints are in place to make this work in a good way.


// AMAZON SHOPPING AFTER FP LEARN >>>>


const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
}
item = {
    name: "toy",
    price: 20
}

// Implement a cart feature
// 1. Add items to cart
// 2. Add 3% tax to items in cart
// 3. Buy Item
// 4. empty cart




// we need to below functions



function addItemsToCart(user, item) {
    const updatedCart = user.cart.concat([item])
    return Object.assign({}, user, { cart: updatedCart }) // created a new user with cart updated
}

function applyTaxToItems(user) {
    const { cart } = user
    taxRate = 1.3
    const updatedCart = cart.map((item) => { name: item.name, price: item.price * taxRate })

    return Object.assign({}, user, { cart: updatedCart })
}

function buyItem(user) {
    return Object.assign({}, user, { purchases: user.cart })
}


function emptyCart(user) {
    return Object.assign({}, user, { cart: [] })
}


// purchaseItem acts as a compose function

const compose = (f, g) => (...args) => f(g(...args)) // for multiple function intake.


function purchaseItem(...fns) { fns.reduce(compose) }

purchasesItems(
    emptyCart,
    buyItem,
    applyTaxToItems,
    addItemsToCart

)(user, { name: 'laptop', price: 300 }) // user will go through each of the function and user object is created new every time with new data field added/updated as it passed through.


// Now if we need to do refundItem(), we can play back the history by looking at all user objects.

const amazonHistory = [] //  every time we do something is compose function, we can push user state to this history array. Now we can see user data history.


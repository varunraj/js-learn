// in FP, we dont combine data and function as one piece.

// Goals of FP is also same as that of OOP

// - clear + understandable
// - Easy to extend
// - Easy to maintain
// - Memory Efficient
// - DRY

// Pure Functions is the core concept. There is a seperation between data and behavior. All objects in FB are immutable. Once it is created, it cannot be changed. State remains.

// These restaints are in place to make this work in a good way.


// AMAZON SHOPPING


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


// add object to cart, add tax, move to purchase, then empty cart
function purchasesItem(items, user) {

    user.cart.push(items)
    cartWithTax = items.map(element => {
        const priceWithTax = element.price * 1.03
        return {
            name: element.name,
            priceWithTax
        }
    });
    purchases = cartWithTax
    cartWithTax = []
    cart = []

}
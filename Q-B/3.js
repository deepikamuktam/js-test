// ------------------------------------------------------------
// Calculate Shopping Cart Total
// ------------------------------------------------------------

// You are given a shopping cart array.
// Each item has a price and a quantity.
//
// Write a function that returns the TOTAL cost of the cart.
//
// Example Input:
// const cart = [
//   { price: 100, quantity: 2 },
//   { price: 50,  quantity: 1 },
//   { price: 25,  quantity: 4 }
// ];
//
// Expected Output: 325
// ------------------------------------------------------------

// ---------------------------
// Solution Area
// ---------------------------
const cart = [
  { price: 100, quantity: 2 },
  { price: 50,  quantity: 1 },
  { price: 25,  quantity: 4 }
];
function calculateCart(cart){
    return cart.reduce((total,item)=>total+item);
}

console.log(calculateCart(cart));
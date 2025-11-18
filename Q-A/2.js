// ------------------------------------------------------------
// Add an "isActive" Property to an Object
// ------------------------------------------------------------

// Write a function that takes an object and returns a NEW object
// with an added property:
// isActive: true

// Example Input:
// { name: "John", age: 25 }

// Expected Output:
// { name: "John", age: 25, isActive: true }

// ---------------------------
// Solution Area
// ---------------------------

// Write your function here:
function addIsActive(obj){
    return{...obj,isActive: true};
}
const user={ name: "John", age:25 };
console.log(addIsActive(user));

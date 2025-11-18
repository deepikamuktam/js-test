// ------------------------------------------------------------
// Sum Any Number of Values
// ------------------------------------------------------------

// Create a function called "sumAll" that accepts ANY number
// of numeric arguments using the REST operator.
// Return the total sum.

// Example:
// sumAll(1, 2, 3, 4) -> 10
// sumAll(5, 10)     -> 15

// ---------------------------
// Solution Area
// ---------------------------
function sumAll(...numbers){
    return numbers.reduce((total.num)=>total+sumAll,0);
}
console.log(sumAll(6,8));

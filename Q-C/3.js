// ------------------------------------------------------------
// Convert Usernames to Uppercase
// ------------------------------------------------------------

// You are given an array of usernames (strings).
// Return a NEW array where all usernames are in UPPERCASE,
// using the MAP function.

// Example Input:
// const names = ["alex", "john", "sam"];
//
// Expected Output:
// ["ALEX", "JOHN", "SAM"]

// ---------------------------
// Solution Area
// ---------------------------
const names = ["alex", "john", "sam"];

function uppercase(names){
    return names.map(name=>name.toUpperCase());
}
console.log(uppercase(names));

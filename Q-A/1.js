// ------------------------------------------------------------
// Extract Names from an Array of Objects
// ------------------------------------------------------------

// You are given an array of user objects.
// Write a function that returns an array containing only the names.

// Example Input:
// const users = [
//   { name: "Alex", age: 20 },
//   { name: "John", age: 25 },
//   { name: "Sam", age: 30 }
//   ...
// ];

// Expected Output:
// ["Alex", "John", "Sam", ...]

// ---------------------------
// Solution Area
// ---------------------------

// Write your function here:
 const users = [
  { name: "Alex", age: 20 },
  { name: "John", age: 25 },
  { name: "Sam", age: 30 }

 ];

function extractNames(users) {
    return users.map(user=>user.name);
}
console.log(extractNames(users));

    

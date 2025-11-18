// ------------------------------------------------------------
// Fix the Code — Scope & let/const/var
// ------------------------------------------------------------

// The code below should increment a counter each time
// the function is called, but it does NOT work correctly.
// Fix the code so that it prints 1, then 2.

// Example Expected Output:
// 1
// 2

// ------------------------------------------------------------

let count = 0;

function increment() {
  count = count + 1;
  console.log(count);
}

increment();
increment();

// ------------------------------------------------------------
// Solution Area
// ------------------------------------------------------------

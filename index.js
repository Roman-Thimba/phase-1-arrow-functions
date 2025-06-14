// Function expression called divide
const divide = function () {
  return 2000 / 100;
};

// Arrow function called square that takes one parameter and squares it
const square = x => x * x;

// Arrow function called add that takes two parameters and adds them
const add = (a, b) => a + b;

// Export the functions for testing (if required by your test setup)
module.exports = {
  divide,
  square,
  add
};


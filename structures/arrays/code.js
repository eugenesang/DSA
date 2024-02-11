// initialization

// 1. Array literal notion
{
  const fruits = ["apple", "banana", "orange"];
  const numbers = [1, 2, 3, 4, 5];
  const emptyArray = []; // Empty array
}

// 2. constructor
{
  const array = new Array();
  const tenEmptySlots = new Array(10);
  const mixedArray = new Array(1, "two", 3.14, true);
}

// 3. from iterable
{
  const letters = Array.from("hello"); // Creates an array of characters: ["h", "e", "l", "l", "o"]
  const doubledNumbers = Array.from([1, 2, 3], (x) => x * 2); // Creates [2, 4, 6]
}



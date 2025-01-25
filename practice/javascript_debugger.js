let numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i]; // Add the current number to the sum
  console.log("Current sum at index", i, "is:", sum); // Log the current sum after each iteration
}

console.log("Final sum is:", sum);
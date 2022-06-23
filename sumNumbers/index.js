/**
 * @param {number[]} numbers
 */
function sumNumbers(numbers) {
  let sum = 0;

  for (const number of numbers) {
    sum += number;
  }

  return sum;
}

// Sample usage - do not modify
console.log(sumNumbers([1, 2, 3, 4, 5])); // 15
console.log(sumNumbers([10, 4, 6, 3])); // 23

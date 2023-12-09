/**
 * @param {number[]} numbers
 * @return {number[]}
 */
const runningSum = function (numbers) {
  // initial condition
  if (numbers.length === 1) return numbers;
  // loop
  for (let i = 1; i < numbers.length; i++) {
    numbers[i] = numbers[i] + numbers[i - 1];
  }
  return numbers;
};

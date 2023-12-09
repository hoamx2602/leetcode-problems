/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  const answer = [];
  for (let i = 1; i <= n; i++) {
    const divisableBy3 = i % 3 === 0;
    const divisableBy5 = i % 5 === 0;

    let currentString = '';

    if (divisableBy3) {
      currentString += 'Fizz';
    }

    if (divisableBy5) {
      currentString += 'Buzz';
    }

    if (!currentString) {
      currentString += i;
    }

    answer.push(currentString);
  }

  return answer;
};

// Time Complexity: O(n)
// Space Complexity: O(1)

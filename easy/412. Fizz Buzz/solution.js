/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  const answer = [];
  for (let i = 1; i <= n; i++) {
    const divisableBy3 = i % 3 === 0;
    const divisableBy5 = i % 5 === 0;

    if (divisableBy3 && divisableBy5) {
      answer.push('FizzBuzz');
    } else if (divisableBy3) {
      answer.push('Fizz');
    } else if (divisableBy5) {
      answer.push('Buzz');
    } else {
      answer.push(i.toString());
    }
  }

  return answer;
};

// Time Complexity: O(n)
// Space Complexity: O(1)

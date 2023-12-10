/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  let steps = 0;

  while (num > 0) {
    (num & 1) == 0 ? (num >>= 1) : num--;
    steps++;
  }

  return steps;
};

// Time Complexity = O(logn)
// Space Complexity = O(1)

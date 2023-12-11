/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let copy = x;
  let reverse = 0;

  while (copy > 0) {
    const lastDigit = copy % 10;
    reverse = reverse * 10 + lastDigit;
    copy = Math.floor(copy / 10);
  }

  return reverse === x;
};

// Time complexity = O(logn);
// Space complexity = 0(1)

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  if (x < 10) {
    return true;
  }

  const stringNum = x.toString();
  let newString = '';
  for (let i = stringNum.length - 1; i >= 0; i--) {
    newString += stringNum[i];
  }

  const newNumber = parseInt(newString);
  return newNumber === x;
};

// TIme complexity = O(n)
// Space complexity = O(1)

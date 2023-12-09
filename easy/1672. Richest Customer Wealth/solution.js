/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let total = 0;
  for (let i = 0; i < accounts.length; i++) {
    const max = accounts[i].reduce((acc, current) => {
      return acc + current;
    }, 0);
    total = Math.max(total, max);
  }

  return total;
};

// Time Complexity = O(n x m)
// Space Complexity = O(1) -> Not create new data structure

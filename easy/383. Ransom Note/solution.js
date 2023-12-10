/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  for (const char of magazine) {
    ransomNote = ransomNote.replace(char, '');
  }

  return !ransomNote;
};

// Time complexity = O(n)
// Space complexity = O(n) - Because: string is immutable, and the replace method has created new string and returned.

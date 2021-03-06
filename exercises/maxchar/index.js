// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const dict = {}
  for (let char of str.split('')) {
    dict[char] ? dict[char]++ : dict[char] = 1
  }
  // return Object.entries(dict).sort((a, b) => {
  //   return a[1] > b[1] ? -1 : 1
  // })[0][0]
  ////
  let maxCount = 0
  let maxKey = ''
  // for (let [key, val] of Object.entries(dict)) {
  //   if (val > maxCount) {
  //     maxCount = val
  //     maxKey = key
  //   }
  for (let char in dict) {
    if (dict[char] > maxCount) maxCount = dict[char], maxKey = char
  }
  return maxKey
}
maxChar('abcddd11')
module.exports = maxChar;

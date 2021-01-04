function isPalindrome(word) {
  // Insert code here;
  var begin = 0
  var end = word.length - 1
  for (i = 0; i < word.length / 2; i++) {
    if (!(word[begin] == word[end]))
      return false
    else {
      begin++;
      end--;
    }
  }
  return true
}

// Do not edit this line;
module.exports = isPalindrome;
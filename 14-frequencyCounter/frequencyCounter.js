function frequencyCounter(word) {
  // Insert code here;
  var letterCount = new Object()
  var letter;
  var count = 0;
  for (i = 0; i < word.length; i++) {
    if (!(word[i] in letterCount)) {
      letter = word[i]
      letterCount[letter] = 1

    }
    else {
      letter = word[i]
      letterCount[letter]++
    }
  }
  return letterCount
}

// Do not edit this line;
module.exports = frequencyCounter;
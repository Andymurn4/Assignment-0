function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  var array = args
  let TwoSet = new Set()
  for (const index in args) {
    for (const element of args[index]) {
      TwoSet.add(element)
    }
  }
  return TwoSet
  
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;
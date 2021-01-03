function countOfAllBooleans(arr) {
  // Insert code here;
  let count = 0;
  let mistake = 0;
  for(let i = 0; i < arr.length; i ++){
    if (arr[i] === true){
      
      count++;
    }
    else if(arr[i]===false){
      
      count++;
    }
    else{
      mistake++;
    }
  }
  return count;


}






// Do not edit this line;
module.exports = countOfAllBooleans;
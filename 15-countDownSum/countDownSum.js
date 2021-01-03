class MySolution {
  countDownSum(num) {
    // Insert code here;
    let res = 0;
    for(let i = num; i>=1; i--){
      res +=i;

    }
    return res;
  }
  
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
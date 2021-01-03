function fizzBuzz(start, end) {
  // Insert code here;
  /*- For multiples of three, insert "Fizz" instead of the number into the output array
- For multiples of five, insert "Buzz" instead of the number into the output array
- For numbers which are multiples of both three and five, insert "FizzBuzz" into the output array
- For numbers which are neither a multiple of three nor a multiple of five, insert the number into the output array
*/
 //Start = begin
 //end =end

 // (1,15)
 //(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15)
 //{1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"];

 let arr = [];
 

for(let i = start; i < end+1; i++){
  if(i%3===0 && i%5===0){
    arr.push("FizzBuzz")
    }
   else if(i%3===0){
    arr.push("Fizz");
   }
   else if(i%5===0){
     arr.push("Buzz")
   }
   else{
     arr.push(i);
   }
   
}

return arr;

}

// Do not edit this line;
module.exports = fizzBuzz;
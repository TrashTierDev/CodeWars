// Write a function named repeater() that takes two arguments (a string and a number), and returns a new string where the input string is repeated that many times.


function repeater(string, n){
   let result ="";

   for (let i=1; i <= n; i++){
       result += string;
   }
   console.log(result);
}
  repeater('x', 5)
// Write a function named repeater() that takes two arguments (a string and a number), and returns a new string where the input string is repeated that many times.


// function repeater(string, n){
//    let result ="";

//    for (let i=1; i <= n; i++){
//        result += string;
//    }
//    console.log(result);
// }
//   repeater('x', 5)

// Write a function that returns a string in which firstname is swapped with last name.

// function nameShuffler(str){
//     let arr= str.split(" ")
//     let reversearr= arr.reverse()
//     let joinarr= reversearr.join(" ")
//     return joinarr
// }

// console.log (nameShuffler('steven phipps'))

// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

function sum (numbers) {

return numbers.reduce((a, b) => a + b, 0)
    
};
console.log(sum([1, 5.2, 4, 0, -1]))

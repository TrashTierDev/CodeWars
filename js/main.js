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

// function sum (numbers) {

// return numbers.reduce((a, b) => a + b, 0)
    
// };
// console.log(sum([1, 5.2, 4, 0, -1]))


// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// let haystack=(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])

// function findNeedle(haystack) {
//  let newNeedle = haystack.indexOf('needle', 0)
//  return ("found the needle at position" + " " + newNeedle)
 
// }


function lovefunc(flower1, flower2){
  if (flower1 % 2 === 0 && flower2 % 2 === 1 || flower1 % 2 === 1 && flower2 % 2 === 0){
    return 'true'
  } else
  return 'false'
}

console.log(lovefunc(0,0))
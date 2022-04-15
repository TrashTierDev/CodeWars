// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// let words = 'GCAT'
// let words2 = words.split('')
// console.log(words2)

// words2.forEach((word)=> {
//     console.log(word);
//     if (word === "T"){
//         words2.pop();
//         words2.push('U');
//     }
// });

// console.log(words2.join(''))

// const words1 = ['one', 'two', 'three', 'four'];
// words1.forEach((word) => {
//   console.log(word);
//   if (word === 'two') {
//     words1.pop(); //'one' will delete from array
//   }
// }); // one // two // four

// console.log(words1); // ['two', 'three', 'four']




// let dna2 = dna.split('')
// let dna3 = dna2.join('')
// dna2.forEach((dna)=>{
//     console.log(dna);
//     if(dna === "T"){
//         dna2.pop();
//         dna2.push('U');
       

//     }
// })
// console.log(dna3)


function DNAtoRNA(dna) {
 return dna.split('T').join('U')
 }

 console.log(DNAtoRNA('TTTT'))







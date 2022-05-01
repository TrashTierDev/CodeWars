// let classPoints = [1,2,3,4,5,6]
// let yourPoints = [90]
function betterThanAverage(classPoints, yourPoints) {
    classPoints.reduce((sum, current)=> sum + current);
    if (classPoints > yourPoints){
        return false
    } else{
        return true
    }
}  
console.log(betterThanAverage([12,23,34,45,56,67,78,89,90], 9))

// let classPoints = [1,2,3,4,5,6]

// let result = arr.reduce((sum, current)=> sum + current);

// console.log(result)

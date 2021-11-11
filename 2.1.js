const sumOfLowest = arr => {
    let min1 = Math.min(...arr);
    // console.log(min1);
    let min1Index = arr.indexOf(min1);
    arr.splice(min1Index,1);
    // console.log(arr)
    let min2 = Math.min(...arr);
    let sum = min1+min2;
    return sum;
}

let test1 = [19, 5, 42, 2, 77];
let test2 = [10, 343445353, 3453445, 3453545353453];

console.log(sumOfLowest(test1));
console.log(sumOfLowest(test2));

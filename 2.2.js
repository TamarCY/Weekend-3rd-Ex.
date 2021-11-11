const oneAndZero = arr =>
{
    let sum = 0;
    let j = 0;
    for ( let i = arr.length -1; i >= 0; i-- ){
        if (arr[i] === 1){ 
            sum += 2 ** j;
        }
        j++;
    }
    return sum;
}

let test = [1, 1, 1, 1];
console.log(oneAndZero(test))
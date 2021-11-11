const findUnique = arr => {
    let firstNum = arr[0];
    let secondNum = arr[1];
    //if the first 2 are the same
    if (arr[0] === arr[1]){
        let i = 2;
        let uniq = arr[2];
        while (arr[i] === arr[0]){
            i++;
            uniq = arr[i];
        }
        return uniq;
    }
    else{
        let ans = arr[2] === arr[0]? arr[1]: arr[0];
        return ans;
    }

   
}

myArr = [1, 1, 1, 1, 1, 8];
console.log(findUnique(myArr));
const longest = str => {
    const arr = str.match(/\b(\w+)\b/g);
    console.log(arr);
    let counter = arr[0].length;
    let ans = [];
    for (let i = 1; i < arr.length; i++){
        if (arr[i].length > counter){
            counter = arr[i].length
        }
    }
    for (i = 0; i < arr.length; i++){
        if (arr[i].length === counter){
            ans.push(arr[i]);
        }
    }
    return ans;
}

console.log(longest("this: is a big book, to-rrrread"))
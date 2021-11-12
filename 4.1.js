const fibonacci = (start ,n) =>{
    if (start == 0 && n == 1){
        return 0;
    }
    else{

    let prev = start;
    let curr = 1;
    let ans = 1;
    for (let i = 2; i < n; i++){
        ans = curr + prev;
        prev = curr;
        curr = ans;
    }
    return ans;
}
}

console.log(fibonacci(1, 6));
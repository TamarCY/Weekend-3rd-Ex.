const repeatStr = (n, str) => {
    let ans = "";
    for (let i = 0; i < n; i++){
        ans = ans.concat(str);
    }
    return ans;
}

console.log(repeatStr(4,"Hello"));
const maskFunc = str =>{
    let ans = "";
    for (let i=0; i< str.length -4; i++){
            ans +="#"
        }
    ans += str.slice(-4);
    return ans;
    

}

console.log (maskFunc("hippppppabcd"))
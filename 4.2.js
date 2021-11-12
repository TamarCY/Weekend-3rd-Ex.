const tribonacci = (signature, n) => {
    const ans = [];
    if (n === 0){
        return ans;
    }
    else {
        let a = signature [0];
        let b = signature [1];
        let c = signature [2];
        for (let i = 3; i < n; i++){
            signature.push(a+b+c);
            a = b;
            b = c;
            c = signature [signature.length-1]
        }
    }
    return signature;
}


console.log (tribonacci([0,1,0],9));
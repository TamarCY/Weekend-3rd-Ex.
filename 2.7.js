const myMath = (operation, val1, val2) => {
    switch (operation){
        case '+':
            return val1 + val2;
        case '-':
            return val1 - val2;
        case '*':
            return val1 * val2;
        case '/':
            return val1 / val2;
        
    }
}

console.log(myMath('*',2,1))
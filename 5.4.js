

const toWeirdCase = str => {
    let newStr = "";
    let OddOrEven = 0;
    for (let i = 0; i < str.length; i++){
        if (str[i] != " "){
           newStr += OddOrEven % 2 === 0 ?  str[i].toUpperCase() : str[i].toLowerCase();
           OddOrEven++;
        }
        else{
        newStr += " ";
        OddOrEven = 0;}

    }
    return newStr;
} 

console.log( toWeirdCase("string"))
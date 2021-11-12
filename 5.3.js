const toCamelCase = str => {
    let newStr = str[0];
    for (let i = 1; i < str.length; i++){
        if (str[i] === ('-') || (str[i] === ("_"))){
            let char = str[i+1];
            char = char.toUpperCase();
            newStr += char;
            i++;
        }
        else {
            newStr += str[i];
        }

    }
    return newStr
}

console.log(toCamelCase('The_Stealth_Warrior'));

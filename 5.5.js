const initials = (name) => {
// let arr = name.split(" ");
// console.log(arr);
// let a = arr[0][0];
// let b = arr[1][0];
// let ans =  a + '.' + b;
// return ans;
let newStr = name[0] + ".";
let i = 1;
while (i < name.length){
    if(name[i] === " "){
        newStr += name[i+1];
        return newStr;
        }
    }

return newStr;
}

console.log (initials["Tamar Cohen"])
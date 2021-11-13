const shortest = str => {
    const arr = str.split(" ");
    let counter = arr[0].length;
    let word;
    arr.forEach(element => {
        if (element.length <= counter){
            counter = element.length;
            word = element;
        }
    });
    return counter;

}

console.log(shortest("my name is pshatatzey poopoopo"))
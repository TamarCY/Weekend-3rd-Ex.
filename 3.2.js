let bus = 
[[2,0],
[3,1],
[2,3]
]

const peopleOnTheBus = arr =>{
    let n = arr[0][0];
    for (let i = 1; i < arr.length; i++ ){
        n += arr[i][0];
        n -= arr[i][1];
    }
    return n;
}

console.log(peopleOnTheBus(bus))
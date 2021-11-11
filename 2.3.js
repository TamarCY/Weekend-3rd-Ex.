const findNextSquare = n =>{
    let sqr = Math.sqrt(n);
    let ans = sqr%1 !== 0 ? -1 : (sqr+1) ** 2 
    console.log(ans);
   
}

findNextSquare(625);

const yearChange = (p0, percent, aug) => {
    percent /= 100;
    let naturalGrowth = p0 * percent;
    return (naturalGrowth + aug);
}

const growthOfPop = (p0, percent, aug, p) => {
    let newPop = p0;
    let yearCount = 0;
    while (newPop < p){ 
        newPop += yearChange (newPop, percent, aug);
        yearCount ++;
    }
    
    return yearCount;
}

console.log(growthOfPop(1000, 2, 50, 1200))

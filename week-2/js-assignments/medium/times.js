function calculateTime(n){
    let start = performance.now();
    let count = 0;
    for(let i=0; i<n; i++){
        count+=i;
    }
    let end = performance.now();
    return end - start
}

console.log(calculateTime(10000))
console.log(calculateTime(1000000))
console.log(calculateTime(100000000))
function findMedian(arr: number[]):number {
    const n = arr.length;
    const sortedArray = arr.sort((a,b) => a - b);
    const mathematicalIndex = (n+1)/2
    let medianIndex = mathematicalIndex - 1;
    let median = sortedArray[medianIndex];

    return median;
}

console.log(findMedian([5,3,2,1,4]))
console.log(findMedian([0,1,2,4,6,5,3]))
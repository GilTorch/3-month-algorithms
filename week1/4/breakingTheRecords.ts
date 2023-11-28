// Hackerrank Challenge: https://www.hackerrank.com/challenges/three-month-preparation-kit-breaking-best-and-worst-records/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-one
const breakingRecords = (scores: number[]): number[] => {
    // Write your code here
    
    let min = scores[0];
    let max = scores[0];
    let minCount = 0; 
    let maxCount = 0;

    for(let i = 0; i < scores.length; i++){
        if(scores[i] > max){
            maxCount++; 
            max = scores[i]
        }
        if(scores[i] < min){
            minCount++;
            min = scores[i];
        }
    }

    return [maxCount, minCount]
    
}

console.log(breakingRecords([12, 24, 10, 24])) // -> [1,1]

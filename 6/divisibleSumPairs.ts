// Hackerank challenge link: https://www.hackerrank.com/challenges/three-month-preparation-kit-divisible-sum-pairs/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-one

function divisibleSumPairs(n, k, ar) {
    // Write your code here
    let result = 0;

    for(let i = 0; i < n; i++){
        for(let j = 0; j < n ; j++){
            if(i < j && ((ar[i] + ar[j]) % k === 0)){
                result++;
            }
        }
    }

    return result;
}
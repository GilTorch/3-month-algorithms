// Hackerrank Challenge: https://www.hackerrank.com/challenges/three-month-preparation-kit-mini-max-sum/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-one


function miniMaxSum(arr) {
    // Write your code here
    let sortedArray = arr.sort();

    let first4 = sortedArray.slice(0,4);
    let last4 = sortedArray.slice(-4);
   
    let minSum = first4.reduce((a,b) => a+b,0);
    let maxSum = last4.reduce((a,b) => a+b,0);

    console.log(`${minSum} ${maxSum}`);
}
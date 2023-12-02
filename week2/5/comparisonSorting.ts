// https://www.hackerrank.com/challenges/three-month-preparation-kit-countingsort1/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-two

function countingSort(arr){
    let frequencyArray = Array(100).fill(0);
    for(let i = 0; i < arr.length; i++){
     frequencyArray[arr[i]]++;
    }
    return frequencyArray;
 }
 
// Hackerrank Challenge: https://www.hackerrank.com/challenges/three-month-preparation-kit-lonely-integer/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-two

function lonelyinteger(a: number[]): number {
    // Write your code here
    let uniqueNumber = 0; 

    const frequencyOfOccurences  = {};

    for(let i = 0; i < a.length;i++){
        if(a[i] in frequencyOfOccurences){
            frequencyOfOccurences[a[i]]++
        }else{
            frequencyOfOccurences[a[i]] = 1;
        }
    }

    for(let aNumber in frequencyOfOccurences){
        if(frequencyOfOccurences[aNumber] === 1){
            uniqueNumber = parseInt(aNumber);
            break;
        }

    }

    console.log(frequencyOfOccurences)

    return uniqueNumber;

}
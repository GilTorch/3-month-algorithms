// Hackerrank Challenge: https://www.hackerrank.com/challenges/three-month-preparation-kit-two-arrays/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-three
const twoArrays = (k: number, A: number[], B: number[]) => {

    // Write your code here
    A = A.sort((a,b)=>a-b);
    B = B.sort((a,b)=>a-b);
    B = B.reverse();
    for(let i = 0; i<A.length; i++){
        if(A[i]+B[i]<k){
            return "NO";
        }
    }
    return "YES";
}
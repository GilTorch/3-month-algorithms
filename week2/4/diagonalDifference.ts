// https://www.hackerrank.com/challenges/three-month-preparation-kit-diagonal-difference/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-two
function diagonalDifference(arr: number[][]): number {
    // Write your code here
    let leftDiagonal = 0;
    let rightDiagonal = 0;

    for(let i = 0; i < arr.length; i++){
        leftDiagonal+= arr[i][i];
    }

    let j = arr.length - 1;
    for(let i = 0; i < arr.length; i++){
        rightDiagonal += arr[i][j];
        j--;
    }

    return Math.abs(leftDiagonal - rightDiagonal);
}

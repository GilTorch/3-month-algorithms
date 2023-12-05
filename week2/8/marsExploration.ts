// Hackerrank challenge: https://www.hackerrank.com/challenges/three-month-preparation-kit-mars-exploration/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-two

const marsExploration = (s) => {

    let lettersChangedCount = 0; 
    const howManySOS = s.length / 3;
    const expected = "SOS".repeat(howManySOS);

    for(let i = 0; i < s.length; i++){
        if(s[i] !== expected[i]){
            lettersChangedCount++;
        }
    }

    return lettersChangedCount;
}
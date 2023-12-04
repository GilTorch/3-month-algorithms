// Hackerrank challenge: https://www.hackerrank.com/challenges/three-month-preparation-kit-pangrams/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-two

function pangrams(s: string): string {
    const englishAlphabet = "abcdefghilkmnopqrstuvwxyz"

    for(let i = 0; i < englishAlphabet.length; i ++){
        
        if(!s.includes(englishAlphabet[i].toLocaleLowerCase()) && !s.includes(englishAlphabet[i].toUpperCase())){
            return "not pangram"
        }
    }

    return "pangram"
}
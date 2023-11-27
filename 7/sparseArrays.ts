// Hackerrank Challenge: https://www.hackerrank.com/challenges/three-month-preparation-kit-sparse-arrays/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-one
function matchingStrings(strings: string[], queries: string[]): number[]{

    const frequencyOfOccurences: number[] = [];

    queries.forEach((query,index) => {
        frequencyOfOccurences[index] = 0;
        strings.forEach((string) => {
            if(query === string){
                frequencyOfOccurences[index]++;
            }
        })
    })


    return frequencyOfOccurences;
}

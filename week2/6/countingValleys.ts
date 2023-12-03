// https://www.hackerrank.com/challenges/three-month-preparation-kit-counting-valleys/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-two
const countingValleys = (steps: number, path: string):number => {
    let stepLevelCount = 0; 
    let valleysCount = 0;

    for(let i = 0; i < steps; i++){
        let previousStepLevelCount = stepLevelCount;
        stepLevelCount+= path[i] === "U" ? 1 : -1;
        if(previousStepLevelCount < 0 && stepLevelCount === 0){
            valleysCount++;
        }
    }

    return valleysCount;
}

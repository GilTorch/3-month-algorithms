
// Hackerrank Challenge: https://www.hackerrank.com/challenges/three-month-preparation-kit-grading/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-two
const gradingStudents = (grades: number[]): number[] => {

    const finalGrades: number[] = [];

    for(let i = 0; i < grades.length; i++){
        const currentGrade = grades[i]
        if(currentGrade < 38){
            finalGrades.push(currentGrade);
        }else{
            
            let possibleMultipleOf5 = currentGrade;

            for(let i = 1; i < 3; i++){
                possibleMultipleOf5++
                if(possibleMultipleOf5 % 5 === 0){
                    break;
                }
            }
            if(possibleMultipleOf5 % 5 === 0){
                finalGrades.push(possibleMultipleOf5);
            }else{
                finalGrades.push(currentGrade);
            }
        }
    }

    return finalGrades;
}
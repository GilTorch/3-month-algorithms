

const gradingStudents = (grades: number[]): number[] => {

    const finalGrades: number[] = [];

    for(let i = 0; i < grades.length; i++){
        console.log(grades[i]);
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
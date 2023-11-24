// ## Step 1

// ### Understand the problem

// 1. Restate the problem in your own words  ✅
// 2. What are the outputs that should come from the solution of the problem? ✅

// 3. Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem? ✅(You may not be able to answer this question until you're set about solving the problem. That's okay, it's still worth considering the question at this early stage)
// 4. How should I label the important pieces of data that are a part of the problem?

// ## Step 2

// ### Explore concrete examples

// 1. Start with simple examples
// 2. Progress to more complex examples
// 3. Explore examples with empty inputs
// 4. Explore examples with invalid inputs 

// ## Step 3

// - Break it down
// *this forces you to think about the code before you write it (break the code in different steps), and helps you catch any lingering conceptual issues or misunderstanding before you dive in and have to worry about the details as well.*

// ## Step 4

// - Solve/Simplify 
// *Solve the problem... and if you can't... solve a simpler problem*

//   To Simplify the problem: 

// - Find the core difficulty in what you're trying to do
// - Temporarily ignore that difficulty
// - Write a simplified solution
// - Then incorporate that difficulty back in

// ## Step 5

// - Look Back & Refactor:

// Questions to ask when refactoring: 

// - Can you check the result ?  (Make sure it works)
// - Can you derive the result differently?
// - Can you understand it at a glance?
// - Can you improve the performance of your solution?
// - Can you think of other ways to refactor ? (guidelines, linting)
// - How have other people solved this problem ?

function processData(input) {
    //Enter your code here
    
    const inputs = input.split("\r\n");
   
   
    const splitCamelCase = (word) => {
        let newWord = "";

        for(let i = 0; i < word.length; i++){
            if(word[i].toUpperCase() === word[i]){
                newWord+=` ${word[i].toLowerCase()}`
            }else{
                newWord+=word[i]
            }
        }   

        return newWord;
    }
    
const combineIntoCamelCase = (word, typeOfWord = "V") => {
    let newWord = "";

    for(let i = 0; i < word.length; i++){
 
        if(word[i] !== " "){
            if(word[i-1] === " "){
                newWord += word[i].toUpperCase();
            }else{
                if(i === 0 && typeOfWord === "C"){
                    newWord+=word[i].toUpperCase();
                } else {
                    newWord += word[i];
                }
            }
        }
    }

    return newWord;
}

    
  const answers = inputs.map(input => {
        const splitString = input.split(";");
        const operation = splitString[0];
        const typeOfWords = splitString[1];
        const word = splitString[2];

        let newWord = ""
        if(operation === "S"){
            newWord = word.replace(/\(|\)/g, "");
            newWord = splitCamelCase(newWord);
        }else if(operation === "C"){
            newWord = combineIntoCamelCase(word, typeOfWords);
            if(typeOfWords === "M"){
                newWord+="()"
            }
        }

        return newWord.trim();
    })
    
    
    console.log(answers.join("\r\n"));
} 
// Hackerrank Challenge: https://www.hackerrank.com/challenges/three-month-preparation-kit-camel-case/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-one

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
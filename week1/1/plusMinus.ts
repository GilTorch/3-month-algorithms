// Hackerank Challenge:  https://www.hackerrank.com/challenges/three-month-preparation-kit-plus-minus/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-one

function plusMinus(arr) {
  // 
  let positivesCount = 0; 
  let zerosCount = 0; 
  let negativesCount = 0; 
  const total = arr.length;

  for(let i = 0; i < arr.length; i++){
    const element = arr[i];
    if(element > 0){
        positivesCount++;
    }else if(element < 0){
        negativesCount++;
    }else {
        zerosCount++;
    }
  }

  const positivesRatio = positivesCount / total; 
  const negativesRatio = negativesCount / total; 
  const zerosRatio = zerosCount / total;

  console.log(positivesRatio.toFixed(6));
  console.log(negativesRatio.toFixed(6));
  console.log(zerosRatio.toFixed);
}

const flippingMatrix = (matrix) => {
    const n = matrix.length; 
    const topCornerMatrixLength = Math.floor(n/2);

    let sum = 0;

    for(let i= 0; i < topCornerMatrixLength; i++){
        for(let j = 0; j < topCornerMatrixLength; j++){
            console.log(matrix[i][j], matrix[i][ n - j - 1], matrix[n - i - 1][j], matrix[n - i - 1][n - j -1]);
            sum += Math.max(matrix[i][j], matrix[i][ n - j - 1], matrix[n - i - 1][j], matrix[n - i - 1][n - j -1])
        }
    }

    return sum;
}
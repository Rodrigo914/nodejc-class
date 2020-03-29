function getSubMatrix(matrix, column) {
    const resultSubMatrix = [];




    for (let i = 1; i < matrix.length; i++) {
        resultSubMatrix.push([]);


        for (let j = 0; j < matrix.length; j++) {
            if (j !== column) {
                resultSubMatrix[resultSubMatrix.length - 1].push(matrix[i][j]);
            }
        }
    }
    return resultSubMatrix;

}

function Matrix(matrix) {


    return {

        getDeterminante: function (auxMatrix = matrix) {
            let totalSum = 0;
            let sign = 1;

            if (auxMatrix.length === 1) {
                return auxMatrix[0][0]
            }


            for (let i = 0; i < auxMatrix.length; i++) {
                const elem = auxMatrix[0][i];
                const submatrix = getSubMatrix(auxMatrix, i);


                totalSum += sign * (elem * this.getDeterminante(submatrix));

                sign = -sign;
            }

            return totalSum;
        }
    };
}




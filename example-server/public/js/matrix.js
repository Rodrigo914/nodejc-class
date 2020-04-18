function drawMatrix() {
    const matrixSizeInput = document.getElementById('matrixSize');
    const size = matrixSizeInput.value;

    const table = document.getElementsByClassName('table')[0];
    table.innerHTML = '';

    for (let i = 0; i < size; i++) {//filas
        const rowElement = document.createElement('div');
        rowElement.className = 'table-row';

        for (let j = 0; j < size; j++) {//columnas
            const inputElement = document.createElement('input');
            inputElement.type = 'text';
            inputElement.className = 'matrix-item';

            rowElement.appendChild(inputElement);



        }

        table.appendChild(rowElement);


    }


}

function getDeterminant() {
    console.log('I\'m working');

    const table = document.getElementsByClassName("table")[0];
    const matrix = [];

    const rows = table.getElementsByClassName('table-row');

    for (const row of rows) {
        matrix.push([]);

        const inputs = row.getElementsByClassName('matrix-item');

        for (const column of inputs) {
            let value = column.value;

            if (value === '') {
                value = 0;

            } else {
                value = Number(value);
            }
            matrix[matrix.length - 1].push(value);
        }

    }
    const resultElement = document.getElementById('result');

    console.log('Se hace la peticion al server');
    axios.post('http://localhost:3000/matrix', { matrix: matrix })
        .then(function (response) {
            console.log('Respuesta del servidor:', response);

            resultElement.innerHTML = response.data.result;
        });
}



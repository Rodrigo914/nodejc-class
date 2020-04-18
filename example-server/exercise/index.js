const getTriangleArea = require('./functions/triangle-area');
const getCircleArea = require('./functions/circle-area');
const squareOperations = require('./functions/square-operations');
const Matrix = require('./functions/Matrix');


console.log('Test');

console.log('El area de mi triangulo es: ', getTriangleArea(5, 4));
console.log('El area de mi circulo es: ', getCircleArea(5));
console.log('el area del cuadrado es: ', squareOperations.getArea(8));
console.log('el area del cuadrado es: ', squareOperations.getPerimeter(8));
console.log('el area del cuadrado es: ', squareOperations.getDeagonal(8));

const MatrixT = [
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
];

const myMatrixT= Matrix(MatrixT);

console.log(myMatrixT.getDeterminante());



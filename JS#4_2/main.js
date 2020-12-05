let m = 10;
let n = m;
let A = new Array(n);

for (let i = 0; i < A.length; i++) {
    A[i] = new Array(m);
    for (let j = 0; j < A[i].length; j++) {
        A[i][j] = Math.floor(Math.random() * 41 - 20);
    }
}

function rotate(matrix) {
    let n = matrix.length;
    let x = Math.floor(n/ 2);
    let y = n - 1;
    for (let i = 0; i < x; i++) {
        for (let j = i; j < y - i; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[y - j][i];
            matrix[y - j][i] = matrix[y - i][y - j];
            matrix[y - i][y - j] = matrix[j][y - i];
            matrix[j][y - i] = temp;
        }
    }
    return;
}

rotate(A);

function sum(arr) {
    let s = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            s += arr[i][j];
        } 
        if (s < 0) {
            for (let k = 0; k < arr.length; k++) {
                /* arr[i].shift(); */
                /* delete arr[i][k]; */
                arr[i].splice(arr[i][k]); 
            }
        }
    }
    return;
}
sum(A);
rotate(A);
rotate(A);
rotate(A);
console.log(A);


function fillArr(n){
    A = new Array(n);
    for (i = 0; i < A.length; i++) {
            A[i] = Math.floor(Math.random() * 41 - 20);
        }
    
}
fillArr(21);
console.log(A);
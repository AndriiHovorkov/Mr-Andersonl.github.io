A = new Array(10);
B = new Array(10);


for(i = 0; i < A.length; i++) {
    A[i] = Math.floor(Math.random()*20);


    for(j = 0; j < A.length; j++) {
        B[j] = Math.floor(Math.random()*20);
    }
}

console.log(A, B);


for (i = 0; i < A.length; i++) {

    for (j = 0; j< B.length; j++) {
        if(A[i] == B[j]){
            console.log(A[i]); 
        }
    }
    
}


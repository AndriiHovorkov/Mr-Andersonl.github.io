/* n = 10;
A = new Array(n);
B = new Array(n);

for (i = 0; i < A.length; i++) {
        A[i] = Math.floor(Math.random() * 41);
    
} 

for (j = 0; j < B.length; j++) {
    B[j] = Math.floor(Math.random() * 41);

} */

A =[23,34,46,'movie',45,'Game'];
B =[3,4,6,'movie',5,'Game'];
console.log(A);
console.log(B);


line ='__________________________________________'
console.log(line);



function compare(a, b){
    
    var v = a.slice(0);
    var z = b.slice(0);

    
    for (var i = v.length - 1; i >= 0; i--) {
        if (typeof v[i] !== "number"){
            v.splice(i, 1);
        }
    }

    for (var j = z.length - 1; j >= 0; j--) {
        if (typeof z[j] !== "number"){
            z.splice(j, 1);
        }
    }
    var sum = 0;
    for(var i = 0; i < v.length; i++){
        sum += v[i];
        var s = 0;
        for(var j = 0; j < z.length; j++){
            s += z[i];
        }
    }
    if(sum > s){
        console.log(A); 
        console.log(v); 
        console.log(sum);
    }else {
        console.log(B); 
        console.log(z); 
        console.log(s);
    }
    

}
compare(A, B);




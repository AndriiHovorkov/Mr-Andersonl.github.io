A =[23,34,46,'movie',45,'Game'];
B =[3,4,6,'movie',5,'Game'];
console.log(A);
console.log(B);


line ='__________________________________________'
console.log(line);



function compare(a, b){

    for (var i = a.length - 1; i >= 0; i--) {
        if (typeof a[i] !== "number"){
            a.splice(i, 1);
        }
    }

    for (var j = b.length - 1; j >= 0; j--) {
        if (typeof b[j] !== "number"){
            b.splice(j, 1);
        }
    }
    var sum = 0;
    for(var i = 0; i < a.length; i++){
        sum += a[i];
        
    }
    var s = 0;
    for(var j = 0; j < b.length; j++){
        s += b[j];
    }
    if(sum > s){
        console.log(A); 
        console.log(sum);
    }else {
        console.log(B); 
        console.log(s);
    }
    

}
compare(A, B);




A =[23,34,46,'movie',45,'Game'];
B =[3,4,6,'movie',5,'Game'];

function sumArr(z){
    var sum = 0;
    for(var i = 0; i < z.length; i++){
        if (typeof z[i] == "number"){
            sum += z[i];
        }
    }
    return sum;
}
sumArr(A)
sumArr(B)

function compare(a, b){
    if(sumArr(a) > sumArr(b)){
        return A;
    }else {
        return B;
    }
}
compare(A, B);
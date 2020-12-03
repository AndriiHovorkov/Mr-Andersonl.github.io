A =[23,34,46,'movie',45,'Game'];
B =[3,4,6,'movie',5,'Game'];
console.log(A);
console.log(B);


line ='__________________________________________'
console.log(line);



function compare(a, b){


    function num (x){
        for (var i = x.length - 1; i >= 0; i--) {
            if (typeof x[i] !== "number"){
                x.splice(i, 1);
            }
            return;
        }
    }
    num (a);
    num (b);

    function sumArr(z){
        var sum = 0;
        for(var i = 0; i < z.length; i++){
            sum += z[i];
            return sum;
        }
    }
    sumArr(a)
    sumArr(b)

    if(sumArr(a) > sumArr(b)){
        console.log(A); 
        console.log(sumArr(a));
        return A;
    }else {
        console.log(B); 
        console.log(sumArr(b));
        return B;
    }
}
compare(A, B);




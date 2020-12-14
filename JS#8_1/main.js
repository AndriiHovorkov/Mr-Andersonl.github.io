A = [];
B = [];
C = [];
D = [];
E = [];

function fillArr(n){
    n.length = 10; 
    for (let i = 0; i < n.length; i++) {
        n[i] = Math.floor(Math.random() * 901);
    }
    return;
}

fillArr(A);
fillArr(B);
fillArr(C);
fillArr(D);
fillArr(E);

function getM(abc){
    let maxValue = abc[0]
    for(let i = 0; i < abc.length; i++){
        if(abc[i] > maxValue){
            maxValue = abc[i];
        }
    }
    return maxValue; 
}
function getMax(){
    let maxArr =[];
    for(let k = 0; k < arguments.length; k++){
            maxArr.push(getM(arguments[k]));
            console.log(arguments[k]);
    }
    console.log(maxArr);
    return arrStr = maxArr.join(', ');
}

getMax(A,B,C,D,E);

console.log(arrStr);




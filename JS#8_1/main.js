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

let maxArr =[];

function getM(abc){
    let maxValue = abc[0]
    for(let i = 0; i < abc.length; i++){
        if(abc[i] > maxValue){
            maxValue = abc[i];
        }
    }
    maxArr.push(maxValue)
    return arrStr = maxArr.join(', ');
}

function getMax(){
    let allArrs = [arguments];
    for(let k = 0; k < allArrs.length; k++){
        for(let j = 0; j < allArrs[k].length; j++){
            getM(allArrs[k][j]);
            console.log(allArrs[k][j]);
        }
    }
}

getMax(A,B,C,D,E);

console.log(arrStr);




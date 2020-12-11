let obj1 = {
    x: 20,
    y: 5,
    c: 10
};
let obj2 = {
    z: 20,
    d: 5,
    c: 20
};



function assignObjects() {
    let tmpObj ={};

    for(let i in arguments) {
        for(let j in arguments[i]) {
            tmpObj[j] = arguments[i][j];
        }
    }
    console.log(tmpObj)
    return tmpObj;
}
assignObjects(obj1, obj2)
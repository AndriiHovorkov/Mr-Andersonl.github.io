obj1 = {
    name: 'Name 1', 
    surname: 'Surname 1',
    age: 23,
    zip: 12,
    x: 'xcom'
};

obj2 = {
    name: 'Name 2', 
    surname: 'Surname 2',
    age: 32,
    zip: 21,
    r: 'rock'
};

res = Object.values(obj1);
console.log(res);

res2 = Object.values(obj2);
console.log(res2);



allArrays = res.concat(res2);
console.log(allArrays); 

var sum = 0;
for(var i = 0; i < allArrays.length; i++){
    sum += allArrays[i];
    }
console.log(sum);


allArrays2 = res.concat(res2);
/* console.log(allArrays2) */; 



for (var i = allArrays2.length - 1; i >= 0; i--) {
    if (typeof allArrays2[i] !== "number"){
        allArrays2.splice(i, 1);
    }
}
console.log(allArrays2);


var s = 0;
for(var i = 0; i < allArrays2.length; i++){
    s += allArrays2[i];
    }
console.log(s);


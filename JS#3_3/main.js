arr = [1,2,3,4,5,6,7,8,9];
console.log(arr);

for ( i = 0; i < Math.floor(arr.length / 2); i++) {
    item = arr[i];
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = item;
}
console.log(arr);
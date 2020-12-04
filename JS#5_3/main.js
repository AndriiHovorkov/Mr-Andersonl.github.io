function doMath(x, znak, y) {
    if (!znak.search(/[^+\-*/%^]/)){
        s='Ошибка';
    }else {
        return s = eval(x + znak.replace('^', '**') + y)
    }
}
doMath(10, '^', 20)
console.log(s);
doMath(10, 'r', 20)
console.log(s);
function delSym(string, sym) {
    let rgx = new RegExp(sym.join('|'), 'gi');
    return  string.replace(rgx, '');
}
console.log(delSym("hello world", ['l', 'd']));
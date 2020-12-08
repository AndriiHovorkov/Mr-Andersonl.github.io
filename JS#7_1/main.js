function delSym(string, sym) {
    rgx = new RegExp(sym.join('|'), 'gi');
    cleanStr= string.replace(rgx, '');
    return cleanStr;
}
delSym("hello world", ['l', 'd'])
console.log(cleanStr);

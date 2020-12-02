obj = {
    str1: 'sE!84!@r',
    str2: 'ANT%@&#!ogj',
    str3: 'Vd#sgd_lo%g@.dom'
}

restrictedList = ['!','@',',','#','%','=','&','/','<','>','|',':'];

rgx = new RegExp(restrictedList.join('|'), 'gi');

cleanStr1= obj.str1.replace(rgx, '');

cleanStr2= obj.str2.replace(rgx, '');

cleanStr3= obj.str3.replace(rgx, '');

console.log(cleanStr1);
console.log(cleanStr2);
console.log(cleanStr3);
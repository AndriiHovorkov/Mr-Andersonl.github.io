m = +prompt('n');
n = +prompt('m');
star = '*';
space = '&nbsp';
console.log(n,m);

str = '';
fil = '';
for(j = 1; j <= n - 2; j++){
   str = str + space;
   fil = fil + star;
}
resSpace = '*' + str + '*<br />';
resFil = fil + star + star + '<br />';

resLin = '';
for(i = 1; i <= m -2; i++) {
   resLin = resLin + resSpace;
}

document.write(resFil);
document.write(resLin);
document.write(resFil);
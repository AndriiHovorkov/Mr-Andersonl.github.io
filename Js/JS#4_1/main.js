
n = 9;
m = n;


k = 3;

center =Math.floor(n/2);

for(i = 1; i <= n; i++) {
    for(j = 1; j <= m; j++) {
        if (i > j && i + j <= n + 1 || i <= j && i + j <= n + 1 && j > center) {
            document.write('** ');
        } else 
        document.write(i + '' + j + ' ');
    }    
    document.write('<br />');
}

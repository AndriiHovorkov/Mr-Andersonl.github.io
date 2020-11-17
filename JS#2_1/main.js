n = +prompt('n');

a = 1;
b = 1;
i = 3;

for ( i = 3; i <= n; i = i + 1) {
    c = a + b;
    a = b;
    b = c;
} 


if( n <= 2 ) {
    c = 1; 
} 
if( n <= 0 ) {
    c = 0; 
}

/* console.log(c);*/

x = 'Простое';

s=Math.floor(Math.sqrt(n));

for( i = 2, i <= s + 1; i <= s; i = i + 1){
    if (n % i == 0) {
        x = 'Составное';
    } 
}

/* console.log(x); */
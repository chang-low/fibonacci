'use strict';
function fib(n) {
    if (n === 0) {
	return 0;    
    } else if (n === 1) {
	return 1;
    }
    return fib(n - 1) + fib(n - 2); 
}

const length = 40;
for (let itr = 0; itr <= length; itr++) {
    console.log(fib(itr));
}


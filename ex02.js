/* Write a program that accepts one or more numbers as command-line
arguments and prints the sum of those numbers to the console (stdout). */

var sum = 0;
var total = process.argv.length;
for(var i=2; i<total; i++){
	sum += Number(process.argv[i]);
}
console.log(sum);

/* The index 'i' starts in 2 because process.argv returns an array in wich the
first and second items are always 'node' and the path to your program (Ex.: C:\Users\etc\program.js), respectively. */
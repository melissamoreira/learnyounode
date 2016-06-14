/* Write a program that uses a single synchronous filesystem operation to read a file and print
the number of newlines (\n) it contains to the console (stdout), similar to running 'cat file | wc -l' */

var fs = require('fs'); //Loads the 'fs' module of Node lib
var file = process.argv[2];
file = fs.readFileSync(file).toString();
//Calls the synchronous method fs.readFileSync() with the path of the file in the parameter, and converts the Buffer object returned to String
var total = file.split('\n').length-1;
console.log(total);

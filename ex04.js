/* Write a program that uses a single ASYNCHRONOUS filesystem operation to read a file and print
the number of newlines (\n) it contains to the console (stdout), similar to running 'cat file | wc -l' */

var fs = require('fs');
fs.readFile(process.argv[2],'utf8',(err, data) => {
	if (err) throw err;
	data = data.split('\n').length-1;
	console.log(data);
});

//When using 'utf8' as the second argument of the fs.readFile() method, it returns a String instead of a Buffer
//Syntax: fs.readFile(file,options,callback)
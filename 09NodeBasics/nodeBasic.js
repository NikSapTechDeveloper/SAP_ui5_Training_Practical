var oReuse = require('./reuse.js');
var ofs = require('fs');

var a=10;
var b= 20;
var z= oReuse.addFunction(a,b);

var i= oReuse.getArrayElement([1,2,3,4]);
var j = oReuse.getJsonAccess({"name":"nikita","age":21,"rollno":2});

 ofs.readFile('story.txt','utf-8',(err,data) =>{
    console.log(data);
 } )

const express = require('express')
const ofs = require('fs');
const app = express();

app.get('/',(req,res)=>{
    res.send("Hello world"); //First use basics
})

app.get('/tell',(req,res)=>{
    res.send(ofs.readFileSync('story.txt','utf-8'));  //now using fs builtin
})

app.use(express.static('files'));

app.listen(8091)
console.log("success running at http://localhost:8091")
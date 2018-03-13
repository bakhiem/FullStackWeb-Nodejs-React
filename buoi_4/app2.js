const express = require('express');
const path = require('path');

let app = express();
app.use(express.static('public'));
app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname , './public/myself.html'));
});

app.get('/frontendpractice',(req,res)=>{
    res.sendFile(path.resolve(__dirname , './public/Test.html'));
});

app.get('/flexbox',(req,res)=>{
    res.sendFile(path.resolve(__dirname , './public/flexbox.html'));
});

app.listen(6969,(err)=>{
    if(err){console.log(err);}
    console.log("App is start at port 6969");
})
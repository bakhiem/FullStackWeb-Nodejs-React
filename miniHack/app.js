
const express = require('express');
const path = require('path');
const handlebar = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const gameController = require('./controllers/gameController');

let app = express();

mongoose.connect('mongodb://localhost/newGame',(err) =>{
    if(err) console.log(err);
    console.log("Database connect success!"); 
});

app.use(bodyParser.urlencoded({
    extended: false
}));
app.get('/',(req,res)=>{
    res.render('home')
})
app.post('/game',(req,res)=>{
    let game = {
        p1 : req.body.p1,
        p2 : req.body.p2,
        p3 : req.body.p3,
        p4 : req.body.p4
    }
    gameController.create(game,(err,data)=>{
        if(err) console.log(err);
        console.log(data);
    })
    res.render('user',{
        p1 : req.body.p1,
        p2 : req.body.p2,
        p3 : req.body.p3,
        p4 : req.body.p4
    })

})
app.engine('handlebars', handlebar({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');



app.use(express.static('public'));



app.listen(6969, (err) => {
    if (err) {
        console.log(err);
    }
    console.log("App is start at port 6969");
})
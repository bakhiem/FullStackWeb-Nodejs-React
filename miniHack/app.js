
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
        res.redirect('/game/' + data._id);
    })

})
app.get('/game/:id',(req,res)=>{
    gameController.findId(req.params.id,(err,data)=>{
        if(err) console.log(err);
        res.render('user',{
            p1 : data.newGame.Player[0].name,
            p2 : data.newGame.Player[1].name,
            p3 : data.newGame.Player[2].name,
            p4 : data.newGame.Player[3].name,
            id: req.params.id,
            info : JSON.stringify(data.newGame)
        })
    })
})

app.post('/addRound',(req,res)=>{
    console.log('addround Game');
    gameController.addRound(req.body.id,(err)=>{
        console.log(err);
    })
})

app.post('/updateGame',(req,res)=>{
    console.log('update Game');
    gameController.updateGame(req.body.id,req.body.player,req.body.round,req.body.score,(err)=>{
        if(err) console.log(err);
        console.log("Update sucesss");
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
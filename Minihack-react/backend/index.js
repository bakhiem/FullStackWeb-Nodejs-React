const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const gameRouter = require('./game/router');

let app = express();

mongoose.connect('mongodb://localhost/newGame',(err) =>{
    if(err) console.log(err);
    console.log("Database connect success!"); 
});

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use('/api/game', gameRouter);

app.use(express.static('public'));



app.listen(6969, (err) => {
    if (err) {
        console.log(err);
    }
    console.log("App is start at port 6969");
})
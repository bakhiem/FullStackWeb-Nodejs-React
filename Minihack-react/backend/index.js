const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const gameRouter = require('./game/router');
const config = require('./config-production.json');
let app = express();

mongoose.connect(config.mongoPath,(err) =>{
    if(err) console.log(err);
    console.log("Database connect success!"); 
});
app.use((req, res, next) => {
    res.setHeader("X-Frame-Options", "ALLOWALL");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "POST, GET, PUT, DELETE, OPTIONS"
    );
  
    if (req.headers.origin) {
      res.setHeader("Access-Control-Allow-Origin", req.headers.origin);
    }
  
    res.setHeader("Access-Control-Allow-Credentials", true);
  
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Authorization, Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json({ extended: false }));
app.use('/api/game', gameRouter);
app.use(express.static('public'));
app.listen(6969, (err) => {
    if (err) {
        console.log(err);
    }
    console.log("App is start at port 6969");
})
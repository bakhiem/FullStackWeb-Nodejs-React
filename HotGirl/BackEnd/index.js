const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json({
    urlEncode: true
}));

app.get("/",(req,res)=>{
    res.send("OK");
})

mongoose.connect('mongodb://localhost:27017/tk-hotgirls', (err) => {
    if (err) console.log(err);
    console.log("Database connect success!");
});
const port = process.env.port || 6969;
app.listen(port, (err) => {
    if (err) {
        console.log(err);
    }
    console.log("App is start at port "+ port);
})
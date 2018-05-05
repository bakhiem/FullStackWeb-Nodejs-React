const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const config = require('./config.json');
const app = express();
app.use(bodyParser.urlencoded({
    extended: false
}));
const imageRoute = require("./modules/api/images/route");
const userRoute = require("./modules/api/users/route");
const authRoute = require("./modules/api/auth/route");
app.use(
    session({
        secret: config.secret,
        resave: false,
        saveUninitialized: false,//nguoi dung lan dau vao thi co luu khong
        cookie: {
            secure : config.secureCookie,
            maxAge: 12 * 60 * 60 * 1000
        }
    })
);



app.use('/api/images', imageRoute);
app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.get("/", (req, res) => {
    res.send("OK");
})

mongoose.connect(config.mongoPath, (err) => {
    if (err) console.log(err);
    console.log("Database connect success!");
});
const port = process.env.port || 6969;
app.listen(port, (err) => {
    if (err) {
        console.log(err);
    }
    console.log("App is start at port " + port);
})
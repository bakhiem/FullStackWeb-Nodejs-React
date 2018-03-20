
const express = require('express');
const path = require('path');
const handlebar = require('express-handlebars');
const bodyParser = require('body-parser');
const fileController = require('./fileController');
const homeRouter = require('./routers/homeRouter');
const answerRouter = require('./routers/answerRouter');
const askRouter = require('./routers/askRouter');

let app = express();
app.engine('handlebars', handlebar({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static('public'));
app.use('/',homeRouter);
app.use('/ask',askRouter);
app.use('/question',answerRouter);

// app.get('/',(req,res) =>{
//     res.render('home',{
//         number : {a : Math.random()*2001 - 1000},
//         htmlData:'<h2>Render HTML</h2>'
//     });
// });

// app.get('/',(req,res)=>{
//     res.sendFile(path.resolve(__dirname , './public/myself.html'));
// });
app.get('/frontendpractice', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/css/style.css'));
});

app.get('/flexbox', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/flexbox.html'));
});

app.listen(6969, (err) => {
    if (err) {
        console.log(err);
    }
    console.log("App is start at port 6969");
})
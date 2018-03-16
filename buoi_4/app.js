const express = require('express');
const path = require('path');
const handlebar = require('express-handlebars');
const bodyParser = require('body-parser');
const fileController = require('./fileController');

let app = express();
app.engine('handlebars', handlebar({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static('public'));

// app.get('/',(req,res) =>{
//     res.render('home',{
//         number : {a : Math.random()*2001 - 1000},
//         htmlData:'<h2>Render HTML</h2>'
//     });
// });

app.get('/', (req, res) => {
    let b = [...fileController.readFileSync('./data.json')].length;
    if (b == 0) {
        res.render('home', {
            htmlData: "<h2>Don't have any question</h2>"
        });
    } else {
        let id = Math.floor((Math.random() * (b)) + 1);
        res.redirect('/question/' + id);
    }

})

app.get('/ask', (req, res) => {
    res.render('ask');
});
app.get('/question/yes/:id', (req, res) => {
    let id = req.params.id;
    let questionList = [...fileController.readFileSync('./data.json')];
    let question = questionList[id - 1];
    question.yes += 1;
    fileController.writeFile('./data.json', questionList, (err) => {
        if (err) {
            console.log(err);
        }
        res.render('home', {
            htmlData: "<h2> " + question.question + "</h2>" + "<p> Đúng : " + question.yes +
                "<p> Sai : " + question.no
        });
    })
});

app.get('/question/no/:id', (req, res) => {
    let id = req.params.id;
    let questionList = [...fileController.readFileSync('./data.json')];
    let question = questionList[id - 1];
    question.no += 1;
    fileController.writeFile('./data.json', questionList, (err) => {
        if (err) {
            console.log(err);
        }
        res.render('home', {
            htmlData: "<h2> " + question.question + "</h2>" + "<p> Đúng : " + question.yes +
                "<p> Sai : " + question.no
        });
    })
});

function getdata(x) {

}
app.post('/ask', (req, res) => {
    try {
        let data = [...fileController.readFileSync('./data.json')];
        let id = data.length + 1;
        let newQuestion = ({
            id: id,
            question: req.body.question,
            yes: 0,
            no: 0
        });
        data.push(newQuestion);
        fileController.writeFile('./data.json', data, (err) => {
            if (err) {
                console.log(err);
            }
            res.redirect('/question/' + id);
        })
    } catch (ex) {
        console.log(ex);
    }
});

app.get('/question/:id', (req, res) => {
    let id = req.params.id;
    let questionList = [...fileController.readFileSync('./data.json')];
    let question = questionList[id - 1];
    res.render('question', {
        question: question.question,
        id: question.id

    });
})

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
const express = require('express');
const Router = express.Router();
const fileController = require('../fileController');


Router.get('/yes/:id', (req, res) => {
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

Router.get('/no/:id', (req, res) => {
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

Router.get('/:id', (req, res) => {
    let id = req.params.id;
    let questionList = [...fileController.readFileSync('./data.json')];
    let question = questionList[id - 1];
    res.render('question', {
        question: question.question,
        id: question.id
    });
})

module.exports = Router;
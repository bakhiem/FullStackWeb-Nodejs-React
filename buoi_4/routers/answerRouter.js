const express = require('express');
const Router = express.Router();
const fileController = require('../Controller/fileController');
const questionController = require('../Controller/questionController');

Router.get('/yes/:id', (req, res) => {
    let id = req.params.id;
    questionController.updateAnswer(true,id,(err)=>{
        if(err) console.log(err);
        res.redirect('/question/info/' + id);
        
    })
});

Router.get('/no/:id', (req, res) => {
    let id = req.params.id;
    questionController.updateAnswer(false,id,(err)=>{
        if(err) console.log(err);
        res.redirect('/question/info/' + id);
        
    })
});


Router.get('/:id', (req, res) => {
    let id = req.params.id;
    questionController.getQuestionByID(id,(doc)=>{
        res.render('question', {
            do : 'active',
            question: doc.questionContent,
            id: doc.id
        });
    });
   
})
Router.get('/info/:id', (req, res) => {
    let id = req.params.id;
    questionController.getQuestionByID(id,(doc)=>{
        res.render('home', {
            question : doc.questionContent,
            totalVote :  doc.yes +  doc.no,
            percentYes : ((doc.yes*100)/(doc.yes +  doc.no)).toFixed(2),
            percentNo : ((doc.no*100)/(doc.yes +  doc.no)).toFixed(2)
        });
    });
})

module.exports = Router;
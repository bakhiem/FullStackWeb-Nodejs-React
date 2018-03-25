const express = require('express');
const Router = express.Router();
//const fileController = require('../Controller/fileController');
const questionController = require('../Controller/questionController');

Router.get('/', (req, res) => {
    questionController.getAllQuestion((doc)=>{
        let randomNumber = Math.floor((Math.random() * (doc.length)));
        
        if(doc.length == 0){
            res.render('home', {
                htmlData: "<h2>Don't have any question</h2>"
            });
        }
        else{
            
            let question = doc[randomNumber];
            res.redirect('/question/' + question._id);
        }
    })
})
module.exports = Router;

const express = require('express');
const Router = express.Router();
const questionController = require('../Controller/questionController');

Router.get('/', (req, res) => {
    res.render('ask',{
        ask : 'active'
    });
});

Router.post('/', (req, res) => {
        questionController.create(req.body.question,(data)=>{
            res.redirect('/question/' + data._id)
        });
});
module.exports = Router;
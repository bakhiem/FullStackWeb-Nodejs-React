const express = require('express');
const Router = express.Router();
const fileController = require('../fileController');

Router.get('/', (req, res) => {
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
module.exports = Router;
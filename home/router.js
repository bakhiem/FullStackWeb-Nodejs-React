const express = require('express');
const router = express.Router();

const homeController = require('./controller')

router.get('/', (req,res) => {
  homeController
  .getAllPlayersName()
  .then(players => res.send(players))
  .catch(err => {
    console.error(err);
    res.status(500).send(err);
  })
})

router.post('/', (req,res) =>{
  homeController
  .createPlayer(req.body)
  .then(result => res.send(result))
  .catch(err => {
    console.error(err);
    res.status(500).send(err);
    })
})

module.exports = router;
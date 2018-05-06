const express = require("express");
const router = express.Router();

const gameController = require("./controller");

router.get("/", (req, res) => {
    gameController
        .getSumScore()
        .then(data => res.send(data))
        .catch(err => {
            console.error(err);
            res.status(500).send(err);
        });
});
router.get('/:id',(req,res)=>{
    gameController.findId(req.params.id,(err,data)=>{
        if(err) console.log(err);
        res.send({
            p1 : data.Player[0].name,
            p2 : data.Player[1].name,
            p3 : data.Player[2].name,
            p4 : data.Player[3].name,
            id: req.params.id,
            info : data
        });
    })
})
router.post("/", (req, res) => {
    gameController.updateGame(req.body, (err, data) => {
        if (err) console.log(err);
        console.log(data._id);

    })
});

router.post('/addRound',(req,res)=>{
    console.log('addround Game');
    gameController.addRound(req.body.id,(err)=>{
        console.log(err);
    })
})

router.post('/create', (req, res) => {
    let game = {
        p1: req.body.p1,
        p2: req.body.p2,
        p3: req.body.p3,
        p4: req.body.p4
    }
    gameController.create(game, (err, data) => {
        if (err) console.log(err);
        console.log(data._id);

    })
});
module.exports = router;
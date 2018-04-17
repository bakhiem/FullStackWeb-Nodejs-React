const express = require("express");
const router = express.Router();

const userController = require('./controller');

router.get('/', (req, res) => {
    userController.getAllUsers(req.query.page || 1)
        .then(images => res.send(images))
        .catch(err => {
            console.error(err);
            res.status(500).send(err);
        });
});

router.get('/:id', (req, res) => {
    userController.getUser(req.params.id)
        .then(images => res.send(images))
        .catch(err => {
            console.error(err);
            res.status(500).send(err);
        });
});



router.post("/", (req, res) => {
    userController.createUser(req.body)
        .then(result => res.send(result))
        .catch(err => {
            console.error(err);
            res.status(500).send(err);
        });
})



router.put('/:id/name', (req, res) => {
    userController.updateUserName(req.params.id,req.body)
        .then(images => res.send(images))
        .catch(err => {
            console.error(err);
            res.status(500).send(err);
        });
});

router.put('/:id/avatar', (req, res) => {
    userController.updateUserName(req.params.id,req.body)
        .then(images => res.send(images))
        .catch(err => {
            console.error(err);
            res.status(500).send(err);
        });
});
router.put('/:id/password', (req, res) => {
    userController.updateUserName(req.params.id,req.body)
        .then(images => res.send(images))
        .catch(err => {
            console.error(err);
            res.status(500).send(err);
        });
});

router.put('/:id/email', (req, res) => {
    userController.updateUserEmail(req.params.id,req.body)
        .then(images => res.send(images))
        .catch(err => {
            console.error(err);
            res.status(500).send(err);
        });
});

router.delete('/:id', (req, res) => {
    userController.deleteUser(req.params.id)
        .then(images => res.send(images))
        .catch(err => {
            console.error(err);
            res.status(500).send(err);
        });
});


module.exports = router;
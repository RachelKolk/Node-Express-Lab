const express = require('express');

const Helpers = require('../data/db.js');

const router = express.Router();

//POST request


//GET request
router.get('/', async (req, res) => {
    try {
        const posts = await Helpers.find(req.query);
        res.status(200).json(posts);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "The posts information could not be retrieved." });
    }
});

//GET Post by ID
router.get('/:id', async (req, res) => {
    try {
        const post = await Helpers.findById(req.params.id);
        if (post) {
            res.status(200).json(post);
        } else {
            res.status(404).json({message: "The post with the specified ID does not exist."});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "The post information could not be retrieved."});
    }
});

module.exports = router;
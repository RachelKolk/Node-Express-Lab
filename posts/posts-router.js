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

module.exports = router;
const express = require('express');

const Helpers = require('../data/db.js');

const router = express.Router();

//POST request
router.post('/', async (req, res) => {
    try {
        
        if (req.body.title == null || req.body.contents == null) {
            res.status(400).json({errorMessage: "Please provide title and contents for the post."});
        } else {
            const post = await Helpers.insert(req.body);
            res.status(201).json(post)
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "There was an error while saving the post to the database"});
    }
})

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
        if (post.id == req.params.id) {
            res.status(200).json(post);
        } else {
            res.status(404).json({message: "The post with the specified ID does not exist."});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "The post information could not be retrieved."});
    }
});

//DELETES a post, but returns that deleted object
router.delete('/:id', async (req, res) => {
    try {
        const post = await Helpers.findById(req.params.id);
        if (post.id == req.params.id) {
            // res.status(200).json(post);
            router.delete('/:id', async (req, res) => {
                try {
                    const destroy = await Helpers.remove(req.params.id);
                    if (destroy > 0) {
                        res.status(200).json(post);
                    }
                } catch (error) {
                    console.log(error);
                    res.status(500).json({error: "The post could not be removed"});
                }
            })            
        }
    } catch {
        res.status(404).json({message: "The post with the specified ID does not exist."});
    }
});



module.exports = router;
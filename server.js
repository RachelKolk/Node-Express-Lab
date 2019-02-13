const express = require('express'); 

const cors = require('cors');

const server = express();

const postsRouter = require('./posts/posts-router.js');

server.use(express.json());

server.use(cors());

server.use('/api/posts', postsRouter);

server.get('/', (req, res) => {
  res.send(`<h1>Posts API</h1>`);
});


module.exports = server;
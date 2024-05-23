// Create web server using express with a CRUD for comments
// Create a new file called comment.js and copy the following code:

// Import express
const express = require('express');

// Create express app
const app = express();

// Set up the port
const port = 3000;

// Set up the body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create an array of comments
let comments = [];

// Create a GET route that returns all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Create a GET route that returns a specific comment
app.get('/comments/:id', (req, res) => {
  const id = req.params.id;
  const comment = comments.find((c) => c.id === id);
  if (comment) {
    res.json(comment);
  } else {
    res.status(404).send('Comment not found');
  }
});

// Create a POST route that adds a new comment
app.post('/comments', (req, res) => {
  const { text } = req.body;
  const comment = { id: comments.length + 1, text };
  comments.push(comment);
  res.json(comment);
});

// Create a PUT route that updates a specific comment
app.put('/comments/:id', (req, res) => {
  const id = req.params.id;
  const { text } = req.body;
  const comment = comments.find((c) => c.id === id);
  if (comment) {
    comment.text = text;
    res.json(comment);
  } else {
    res.status(404).send('Comment not found');
  }
});

// Create a DELETE route that deletes a specific comment
app.delete('/comments/:id', (req, res) => {
  const id = req.params.id;
  const index = comments.findIndex((c) => c.id === id);
  if (index !== -1) {
    comments.splice(index, 1);
    res.send('Comment deleted');
  } else {
    res.status(404).send('Comment not found');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Run the server using the following command:
// node comment.js
// You can now make requests to the server using the following routes:
// GET /comments - Returns all comments
// GET /comments/:id - Returns a

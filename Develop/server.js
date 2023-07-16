//Import express.js
const express = require('express');

//import built-in Node.js package 'path' to resolve path of files that are located on the server
const path = require('path');

//initialize the instance of Express.js
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Specify omn whcih port the Express.js server will run
const PORT = 5001;

//Static middleware pointing to the public folder 
app.use(express.static('public'));

app.get('/start', (req, res) => res.sendFile(path.join(__dirname, 'public/start.html'))
);

app.get('/api/start', (req, res) => {
    readFromFile('./db/cards.json').then((data) => res.json(JSON.parse(data)));
  });

//liste() method is responsible for listening for incoming connections on the specidied port
app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`));
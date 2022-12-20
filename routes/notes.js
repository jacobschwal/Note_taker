const notes = require('express').Router();
const uuid = require('../helpers/uuid');
const {readFileData, readAndAppend} = require('../helpers/fs');
const dbData = require('../db/db.json')


// Creating the post 
notes.post('/', (req,res) => {
  const {title, text} = req.body;

  if (req.body) {
    const newNote = {
      title,
      text,
      id: uuid(),
    };
    readAndAppend(newNote, './db/db.json');
    res.json('New note has been added');
  }else {
    res.error('There was an error adding note');
  }
});


// Creating the get 
notes.get('/', (req,res) => {
  readFileData('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

module.exports = notes;
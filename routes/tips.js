const tips = require('express').Router(); //creating a new router instance and assigning it to the constant tips
const {v4 : uuid} = require('uuid');
const {
    readFromFile,
    readAndAppend,
    writeToFile
    
} = require('../helpers/fsUtil')

// GET Route for retrieving all the tips
tips.get('/', (req,res) => {
    readFromFile('../db/tips.json').then((data) => res.json(JSON.parse(data)));
});

// GET Route for a specific tip
tips.get('/:tip_id', (req, res) => {
    const tipId = req.params.tip_id;
    readFromFile('./db/tips.json')
    .then((data) => JSON.parse(data))
    .then((json) => {
      const result = json.filter((tip) => tip.tip_id === tipId);
      return result.length > 0
        ? res.json(result)
        : res.json('No tip with that ID');
    });
})
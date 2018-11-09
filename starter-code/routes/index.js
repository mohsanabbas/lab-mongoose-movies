const express = require('express');

const router = express.Router();
const celebrity = require('../model/celebrity.js');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', (req, res, next) => {
  celebrity.find()
    .then((celebrity) => {
      console.log(celebrity);
      res.render('celebrities', { celebrity });
    })
    .catch((error) => {
      console.log(error);
    });
},);
router.get('/celebrities/:id', (req, res, next) => {
  const celebrityId = req.params.id;
  celebrity.findOne({'_id':celebrityId})
    .then((celebrity) => {
      console.log(celebrity);
      res.render('celebdetail', { celebrity });
    })
    .catch((error) => {
      console.log(error);
    });
},);
module.exports = router;

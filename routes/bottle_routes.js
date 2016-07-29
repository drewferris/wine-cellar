'use strict';

const express = require('express');
const Bottle = require('../model/bottle');
const bodyParser = require('body-parser').json();
// const jwt = require('../lib/jwt_auth');

const router = module.exports = exports = express.Router();

router.get('/', (req, res, next) => {
  Bottle.find({}, (err, bottles) => {
    if(err) return next(err);
    res.json(bottles);
  });
});

router.post('/', bodyParser, (req, res, next) => {
  let newBottle = new Bottle(req.body);
  newBottle.save((err, data) => {
    if(err) return next(err);
    res.json(data);
  });
});

router.put('/', bodyParser, (req, res, next) => {
  Bottle.findOneAndUpdate({_id: req.body._id}, req.body, (err) => {
    if(err) return next(err);
    let message = 'successfully updated';
    res.json({message});
  });
});

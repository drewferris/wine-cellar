'use strict';

const mongoose = require('mongoose');

const Bottle = new mongoose.Schema({
  name: {type: String},
  winery: {type: String},
  grape: {type: String},
  year: {type: Number},
  location: {type: String},
  glassPrice: {type: Number, default: 0},
  bottlePrice: {type: Number, default: 0},
  nose: {type: String},
  pairing: {type: String},
  description: {type: String}
});

module.exports = mongoose.model('bottle', Bottle);

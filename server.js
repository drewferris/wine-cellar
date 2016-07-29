'use strict';
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bottleRouter = require('./routes/bottle_routes');

const dbPort = process.env.MONGOLAB_URI || 'mongodb://localhost/dev_db';

mongoose.connect(dbPort);

app.use(express.static(__dirname + '/build'));

app.use('/bottle', bottleRouter);

app.use((req, res) => {
  console.log('hit end');
  res.status(404).json({message: 'route not found'});
}).use((err, req, res, next) => {
  res.status(500).json({message: err.message});
  next(err);
});

app.listen(process.env.PORT || 3000, () => {
  console.log('listening on' + (process.env.PORT || 3000));
});

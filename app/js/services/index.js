module.exports = function(app) {
  require('./get_service')(app);
  require('./error_handler')(app);

};

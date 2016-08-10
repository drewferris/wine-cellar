module.exports = function(app) {
  app.directive('bottleList', function() {
    return {
      scope: {
        bottles: '='
      },
      templateUrl: './templates/bottle_list.html'
    };
  });
};

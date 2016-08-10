'use strict';

module.exports = function(app) {
  app.controller('BottleController', ['$http', 'GetService', 'ErrorHandler', function($http, GetService, ErrorHandler) {
    const getService = GetService('/bottle');
    this.$http = $http;
    this.bottles = [];

    this.getBottles = function() {
      getService.getAll()
      .then((res) => {
        this.bottles = res.data;
      }, ErrorHandler.logError('Error getting bottles'));
    };
  }]);
};

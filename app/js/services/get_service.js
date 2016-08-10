'use strict';

module.exports = function(app) {
  app.factory('GetService', ['$http', function($http) {
    let baseUrl = 'http://localhost:3000';
    function HTTPService(resource) {
      this.resource = resource;
    }

    HTTPService.prototype.getAll = function() {
      return $http.get(baseUrl + this.resource);
    };

    return function(resource) {
      return new HTTPService(resource);
    };
  }]);
};

'use strict';

const angular = require('angular');
const ngRoute = require('angular-route');

const app = angular.module('CellarApp', [ngRoute]);

require('./services')(app);
require('./controllers')(app);
require('./directives')(app);

app.config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: './templates/partials/cellar.html',
    controller: 'BottleController',
    controllerAs: 'botlctrl'
  });
});

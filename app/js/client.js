'use strict';

const angular = require('angular');

const app = angular.module('Cellar-App');

require('./services')(app);
require('./controllers')(app);
require('./directives')(app);

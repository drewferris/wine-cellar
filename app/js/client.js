'use strict';

const angular = require('angular');
const app = angular.module('CellarApp', []);

require('./services')(app);
require('./controllers')(app);
require('./directives')(app);

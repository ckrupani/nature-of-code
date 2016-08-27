/*global angular*/

import ServiceModule from './shared_components/services/services.module';
import DirectiveModule from './shared_components/directives/directives.module';

import routeConfig from './application.route.config';
import runBlock from './application.run';
import controller from './application.controller';

// import MainModule from './home/home.module';

let application;

application = angular.module('PhysicsApp', [ 'ui.router', ServiceModule.name, DirectiveModule.name ])

    .config(routeConfig)
    .run(runBlock)
    .controller('ApplicationCtrl', controller);

export default application;

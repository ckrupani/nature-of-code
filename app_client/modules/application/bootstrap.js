/*global angular*/

import 'angular-ui-router';
import 'd3';
import application from './application.module';

angular.element(document).ready(() => {
    angular.element(document).mousemove(function(e) {
        window.x = e.pageX;
        window.y = e.pageY;
    });
    
    angular.bootstrap(document, [ application.name ]);
});

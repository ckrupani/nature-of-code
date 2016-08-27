
import template from './application.html!text';
import './application.scss!';

let routeConfig = ($stateProvider, $locationProvider, $urlRouterProvider) => {
    $stateProvider.state('index', {
        url: '/',
        template: template,
        controller: 'ApplicationCtrl',
        controllerAs: 'appCtrl'    
        /*resolve: {
            publisherPromise: ['Publisher', function (Publisher) {
                return Publisher.getAll();
            }]
        }*/
    });

    $urlRouterProvider.otherwise('/');

    return $locationProvider.html5Mode(true);
};

routeConfig.$inject = [ '$stateProvider', '$locationProvider', '$urlRouterProvider'];

export default routeConfig;

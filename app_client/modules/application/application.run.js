
let run = ($rootScope) => {

    // $rootScope.title = 'Express';

    /*let routeChangeEvent = $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {

        if (!Authentication.isLoggedIn() && toState.name !== 'main.login') {
            console.log('DENY : Redirecting to Login');
            event.preventDefault();
            $state.go('main.login');
        } else if (Authentication.isLoggedIn() && toState.name === 'main.login') {
            console.log('DENY : Redirecting to overview');
            event.preventDefault();
            $state.go('main.overview');
        } else {
            console.log('ALLOW');
        }
    });*/
};

run.$inject = [ '$rootScope' ];

export default run;

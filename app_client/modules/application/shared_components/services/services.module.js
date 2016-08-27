/*global angular*/

import WalkerService from './walker.service';
import BounceBallService from './bounceBall.service';
import MoverService from './mover.service';

export default angular.module('Services', [])

    .service('Walker', WalkerService)
    .service('BounceBall', BounceBallService)
    .service('Mover', MoverService);
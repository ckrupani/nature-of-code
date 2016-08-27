/*global angular*/

import randomWalker from './randomWalker/randomWalker.directive';
import bounceBall from './bounceBall/bounceBall.directive';
import mover from './mover/mover.directive';

export default angular.module('Directives', [])
    
    .directive('randomWalker', randomWalker)
    .directive('bounceBall', bounceBall)
    .directive('mover', mover);


import template from './randomWalker.html!text';
import './randomWalker.scss!';
import controller from './randomWalker.controller';

export default [() => {
    return {
        restrict: 'EA',
        template: template,
        controller: controller,
        controllerAs: 'walkerCtrl',
        compile: function (tElement, tAttrs) {
            var template = `<div style='height: ${document.documentElement.clientHeight}px; width: ${document.documentElement.clientWidth}px;'></div>`;

            tElement.append(angular.element(template));

            return {
                pre: function (scope, iElement, iAttrs) {
                },
                post: function (scope, iElement, iAttrs, ctrl) {
                    var parentElement = d3.select(iElement.find('div')[0]),
                        parentWidth = Math.floor(+(parentElement.style('width').replace('px', ''))),
                        parentHeight = Math.floor(+(parentElement.style('height').replace('px', ''))),
                        svg;

                    ctrl.Walker.setup(parentWidth/2, parentHeight/2);

                    svg = parentElement.append('svg').attr({
                        width: parentWidth,
                        height: parentHeight
                    });

                    setInterval(function() {
                        svg.append('circle')
                            .attr('cx', ctrl.Walker.display().x)
                            .attr('cy', ctrl.Walker.display().y)
                            .attr('r', 1)
                            .attr('fill', 'black');

                        ctrl.Walker.step();
                    }, 100);

                }
            };
        }
    };
}];

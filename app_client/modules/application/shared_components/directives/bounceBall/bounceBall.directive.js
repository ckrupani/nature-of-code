
import template from './bounceBall.html!text';
import './bounceBall.scss!';
import controller from './bounceBall.controller';

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

                    ctrl.BounceBall.setup(parentWidth/2, parentHeight/2);

                    svg = parentElement.append('svg').attr({
                        width: parentWidth,
                        height: parentHeight
                    });

                    setInterval(function() {
                        svg.selectAll('circle').remove();
                        svg.append('circle')
                            .attr('cx', ctrl.BounceBall.display().x)
                            .attr('cy', ctrl.BounceBall.display().y)
                            .attr('r', 10)
                            .attr('fill', 'black');

                        ctrl.BounceBall.step();

                        if (ctrl.BounceBall.location.x < 10 || ctrl.BounceBall.location.x > parentWidth-10) {
                            ctrl.BounceBall.velocity.x *= -1;
                        }

                        if (ctrl.BounceBall.location.y < 10 || ctrl.BounceBall.location.y > parentHeight-10) {
                            ctrl.BounceBall.velocity.y *= -1;
                        }
                    }, 100);

                }
            };
        }
    };
}];


import controller from './mover.controller';

export default [() => {
    return {
        restrict: 'EA',
        controller: controller,
        controllerAs: 'moverCtrl',
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

                    ctrl.Mover.setup(parentWidth, parentHeight);

                    svg = parentElement.append('svg').attr({
                        width: parentWidth,
                        height: parentHeight
                    });

                    setInterval(function() {
                        // svg.selectAll('circle').remove();
                        svg.append('circle')
                            .attr('cx', ctrl.Mover.display().x)
                            .attr('cy', ctrl.Mover.display().y)
                            .attr('r', 10)
                            .attr('fill', 'white')
                            .attr('stroke', 'black')
                            .attr('stroke-width', 1);

                        ctrl.Mover.move();
                    }, 100);

                }
            };
        }
    };
}];

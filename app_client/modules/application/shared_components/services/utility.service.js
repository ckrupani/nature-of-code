
import Vector from './vector.service';

export default {

    random(min, max, wholeNumber) {
        var min = min || 0,
            max = max || 1,
            wholeNumber = wholeNumber || false,
            scale = d3.scale.linear().domain([0, 1]).range([min, max]);

        if (wholeNumber) {
            return Math.floor(scale(Math.random()));
        } else {
            return scale(Math.random());
        }
    },

    random2D() {
        var unitVector = new Vector(this.random(-100, 100, true), this.random(-100, 100, true));

        unitVector.normalize();

        return unitVector;
    }
}
import Vector from './vector.service';

export default class Walker {
    constructor() {
        this.location = null;
        this.velocity = new Vector(1, 3.3);
    }

    setup(initX, initY) {
        this.location = new Vector(initX, initY);
    }

    display() {
        return {
            x: this.location.x,
            y: this.location.y
        };
    }

    step() {
        this.location.add(this.velocity);
    }
}
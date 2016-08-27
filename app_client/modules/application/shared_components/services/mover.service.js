
import Vector from './vector.service';
import Util from './utility.service';

export default class Mover {
    constructor() {
        this.location = null;
        this.velocity = null;
        this.width = null;
        this.height = null;
        this.topspeed = 10;
    }

    setup(width, height) {
        this.location = new Vector(width/2, height/2);
        this.velocity = new Vector(0, 0);
        this.acceleration = new Vector(-0.001, 0.01);
        this.width = width;
        this.height = height;
    }

    move() {
        this.acceleration = Util.random2D();

        /*var mouse = new Vector(window.x || 0, window.y || 0), // Towards mouse.
            direction = Vector.sub(mouse, this.location);

        direction.normalize();
        direction.mul(0.5);

        this.acceleration = direction;*/

        this.velocity.add(this.acceleration);
        this.velocity.limit(this.topspeed);
        this.location.add(this.velocity);
        this.checkEdge();
    }

    checkEdge() {
        if (this.location.x > this.width) {
            this.location.x = 0;
        } else if (this.location.x < 0) {
            this.location.x = this.width;
        }

        if (this.location.y > this.height) {
            this.location.y = 0;
        } else if (this.location.y < 0) {
            this.location.y = this.height;
        }
    }

    display() {
        return {
            x: this.location.x,
            y: this.location.y
        }
    }
}
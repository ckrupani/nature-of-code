
export default class Vector {
    constructor(_x, _y) {
        this.x = _x;
        this.y = _y; 
    }

    add(vec) {
        this.x += vec.x;
        this.y += vec.y;
    }

    sub(vec) {
        this.x -= vec.x;
        this.y -= vec.y;
    }

    mul(scalar) {
        this.x *= scalar;
        this.y *= scalar;
    }

    div(scalar) {
        this.x /= scalar;
        this.y /= scalar;
    }

    mag() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }

    normalize() {
        var mag = this.mag();

        if (mag !== 0) {
            this.div(mag);
        }
    }

    limit(max) {
        if (this.mag() > max) {
            this.normalize();
            this.mul(max);
        }
    }

    static add(u, v) {
        return new Vector((u.x + v.x), (u.y + v.y));
    }

    static sub(u, v) {
        return new Vector((u.x - v.x), (u.y - v.y));
    }

    static mul(u, scalar) {
        return new Vector((u.x * scalar), (u.y * scalar));
    }

    static add(u, scalar) {
        return new Vector((u.x / scalar), (u.y / scalar));
    }
}
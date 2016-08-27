
export default class Walker {
    constructor() {
        this.x = null;
        this.y = null;
    }

    setup(initX, initY) {
        this.x = initX;
        this.y = initY;
    }

    display() {
        return {
            x: this.x,
            y: this.y
        };
    }

    
}
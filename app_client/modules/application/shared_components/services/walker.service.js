import Util from './utility.service';

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

    // Random - equal probable (Uniform distribution)
    /*step() {
        var choice = Math.floor((Math.random() * 4));

        switch(choice) {
            case 0:
                this.x += 1;
                break;
            case 1:
                this.x -= 1;
                break;
            case 2:
                this.y += 1;
                break;
            case 3:
                this.y -= 1;
                break;
        }
    }*/

    // Random - unequal probable (Non-uniform distribution)
    /*step() {
        var choice = Math.random();

        if (choice >= 0 && choice <= 0.4) {
            this.x += 1;
        } else if (choice > 0.4 && choice <= 0.6) {
            this.x -= 1;
        } else if (choice > 0.6 && choice <= 0.8) {
            this.y += 1;
        } else {
            this.y -= 1;
        }
    }*/

    // Uniform but with 8 possible ways. 
    /*step() {
        //var stepX = (Math.random() * 2) - 1,  // random(-1, 1)
        //    stepY = (Math.random() * 2) - 1;

        //var stepX = Math.floor((Math.random() * 3)) - 1, // random (-1, 0, 1)
        //    stepY = Math.floor((Math.random() * 3)) - 1;

        var stepX = Math.random(), // random down and right
            stepY = Math.random();

        this.x += stepX;
        this.y += stepY; 
    }*/

    // 50% probability to move towards mouse
    /*step() {
        var prob = Math.random(),
            stepX, stepY;

        if (prob < 0.5) {
            stepX = window.x - this.x;
            stepY = window.y - this.y;

            if (stepX !== 0) {
                stepX = stepX / Math.abs(stepX);
            }

            if (stepY !== 0) {
                stepY = stepY / Math.abs(stepY);
            }

            if (stepX && stepY) {
                this.x += stepX;
                this.y += stepY;     
            }
            
        } else {
            stepX = Math.floor((Math.random() * 3)) - 1, // random (-1, 0, 1)
            stepY = Math.floor((Math.random() * 3)) - 1;
            this.x += stepX;
            this.y += stepY; 
        }
    }*/

    step() {
        var stepSize = this.customDistribution(),
            stepX, stepY;

        console.log(stepSize);
        stepX = Util.random(-1, 1) * stepSize, // (Math.random() * stepSize) - (stepSize/2),  // random(-1, 1)
        stepY = Util.random(-1, 1) * stepSize; // (Math.random() * stepSize) - (stepSize/2);

        this.x += stepX;
        this.y += stepY;
    }

    customDistribution() { //probability exponentially: making the likelihood that a value is picked equal to the value squared
        var R1, R2;
        while(true) {
            R1 = Util.random(0, 10, true); // Math.floor(Math.random() * 10);
            R2 = Util.random(0, 10, true);

            if ((R2 * R2) === R1) {
                return R1;
            }
        }
    }

    /*perlinNoise1D(t) {
        var lastChoice = 0.365, lastT;

        return function () {
            var currentChoice;

            if (lastT && lastT === t) {
                return 
            }
            currentChoice = Math.random();

            if (lastChoice) {

            }

            lastChoice = currentChoice;
            return currentChoice;
        };
    }*/

}
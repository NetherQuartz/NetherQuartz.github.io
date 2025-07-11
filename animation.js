let stars = [];
const speed = 2; // Fixed speed value

function setup() {
    if (windowHeight / windowWidth < 16 / 9) {
        let canvas = createCanvas(windowWidth, windowHeight);
        canvas.parent('animation-background');
        for (let i = 0; i < 800; i++) {
            stars[i] = new Star();
        }
    }
}

function draw() {
    if (windowHeight / windowWidth < 16 / 9) {
        background(0);
        translate(width / 2, height / 2);
        for (let i = 0; i < stars.length; i++) {
            stars[i].update();
            stars[i].show();
        }
    }
}

class Star {
    constructor() {
        this.x = random(-width, width);
        this.y = random(-height, height);
        this.z = random(width);
        this.pz = this.z;
    }

    update() {
        this.z -= speed;
        if (this.z < 1) {
            this.z = width;
            this.x = random(-width, width);
            this.y = random(-height, height);
            this.pz = this.z;
        }
    }

    show() {
        fill(255);
        noStroke();

        let sx = map(this.x / this.z, 0, 1, 0, width);
        let sy = map(this.y / this.z, 0, 1, 0, height);

        let r = map(this.z, 0, width, 16, 0);
        ellipse(sx, sy, r, r);

        let px = map(this.x / this.pz, 0, 1, 0, width);
        let py = map(this.y / this.pz, 0, 1, 0, height);

        this.pz = this.z;

        stroke(255);
        line(px, py, sx, sy);
    }
}

function windowResized() {
    if (windowHeight / windowWidth < 16 / 9) {
        resizeCanvas(windowWidth, windowHeight);
    }
}

export class Player {
    constructor(width, height, x, y) {
        this.w = width;
        this.h = height;
        this.y = y;
        this.x = x;
        this.speed = 10;
        this.score = 0;
    }
    get width() {
        return this.w;
    }
    get height() {
        return this.h;
    }
    get positionX() {
        return this.x;
    }
    get positionY() {
        return this.y;
    }
    moveUp() {
        this.y -= this.speed;
    }
    moveDown() {
        this.y += this.speed;
    }
}

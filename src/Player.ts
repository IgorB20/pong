

export abstract class Player{
    private y: number;
    private x: number;
    private w: number;
    private h: number;
    private speed: number;
    private score: number;

    constructor(width: number, height: number, x: number, y: number) {
        this.w = width;
        this.h = height;
        this.y = y;
        this.x = x;
        this.speed = 10;
        this.score = 0;
    }

    get width(){
        return this.w;
    }

    get height(){
        return this.h;
    }

    get positionX(){
        return this.x;
    }

    get positionY(){
        return this.y;
    }

    public abstract handleMoveEvent(event: KeyboardEvent): any;

    public moveUp(){
        this.y -= this.speed;
    }

    public moveDown(){
        this.y += this.speed;
    }
}
import { Player } from "./Player";


export class Field {
    private w: number;
    private h: number;
    private canvas: HTMLCanvasElement;
 

    constructor(w: number, h: number) {
        this.w = w;
        this.h = h;
        this.canvas = this.initializeCanvas();
     
        const appWrapper = document.querySelector("#appWrapper");
        appWrapper?.appendChild(this.canvas);
    }

    private initializeCanvas() {
        const canvas = document.createElement('canvas');
        canvas.width = this.w;
        canvas.height = this.h;
        return canvas;
    }

    public get getCanvas(){
        return this.canvas;
    }

    public get width(){
        return this.w;
    }
    
    public get height(){
        return this.h;
    }

  
}
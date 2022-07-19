export class Field {
    constructor(w, h) {
        this.w = w;
        this.h = h;
        this.canvas = this.initializeCanvas();
        const appWrapper = document.querySelector("#appWrapper");
        appWrapper === null || appWrapper === void 0 ? void 0 : appWrapper.appendChild(this.canvas);
    }
    initializeCanvas() {
        const canvas = document.createElement('canvas');
        canvas.width = this.w;
        canvas.height = this.h;
        return canvas;
    }
    get getCanvas() {
        return this.canvas;
    }
    get width() {
        return this.w;
    }
    get height() {
        return this.h;
    }
}

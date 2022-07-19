import { Player } from "./Player.js";


export class LeftPlayer extends Player{

    public handleMoveEvent(event: KeyboardEvent) {
        if(event.key === "w") this.moveUp();
        if(event.key === "s") this.moveDown();
    }
}
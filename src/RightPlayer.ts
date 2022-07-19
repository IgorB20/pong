import { Player } from "./Player.js";


export class RightPlayer extends Player{

    public handleMoveEvent(event: KeyboardEvent) {
        if(event.key === "ArrowUp") this.moveUp();
        if(event.key === "ArrowDown") this.moveDown();
    }
}
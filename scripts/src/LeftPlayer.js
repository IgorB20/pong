import { Player } from "./Player.js";
export class LeftPlayer extends Player {
    handleMoveEvent(event) {
        if (event.key === "w")
            this.moveUp();
        if (event.key === "s")
            this.moveDown();
    }
}

import { Player } from "./Player.js";
export class RightPlayer extends Player {
    handleMoveEvent(event) {
        if (event.key === "ArrowUp")
            this.moveUp();
        if (event.key === "ArrowDown")
            this.moveDown();
    }
}

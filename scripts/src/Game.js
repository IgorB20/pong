import { PlayersEventObservable } from "./PlayersEventObservable.js";
export class Game {
    constructor(field, players) {
        this.field = field;
        this.players = players;
        const eventObservable = new PlayersEventObservable();
        this.players.forEach((player) => eventObservable.subscribe(player));
        document.addEventListener('keydown', (event) => { eventObservable.notify(event); });
        this.gameLoop();
    }
    gameLoop() {
        window.requestAnimationFrame(() => this.gameLoop());
        this.clearAll();
        this.renderPlayers();
    }
    getCanvasContext() {
        return this.field.getCanvas.getContext("2d");
    }
    clearAll() {
        const ctx = this.getCanvasContext();
        if (ctx)
            ctx.clearRect(0, 0, this.field.width, this.field.height);
    }
    renderPlayers() {
        const ctx = this.getCanvasContext();
        if (ctx) {
            this.players.forEach((player) => {
                ctx.beginPath();
                ctx.lineWidth = 3;
                ctx.fillStyle = "#fff";
                ctx.fillRect(player.positionX, player.positionY, player.width, player.height);
                ctx.stroke();
            });
        }
    }
    ;
}

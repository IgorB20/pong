import { PlayersEventObservable } from "./PlayersEventObservable.js";
import { Field } from "./Field";
import { Player } from "./Player";


export class Game {
    private field: Field;
    private players: Player[];

    constructor(field: Field, players: Player[]) {
        this.field = field;
        this.players = players;

        const eventObservable = new PlayersEventObservable();
        this.players.forEach((player: Player) => eventObservable.subscribe(player));
        
        document.addEventListener('keydown', (event) => { eventObservable.notify(event) })

        this.gameLoop();
    }

    private gameLoop() {
        window.requestAnimationFrame(() => this.gameLoop());
        this.clearAll();
        this.renderPlayers();
    }

    private getCanvasContext() {
        return this.field.getCanvas.getContext("2d");
    }

    private clearAll() {
        const ctx = this.getCanvasContext();
        if (ctx) ctx.clearRect(0, 0, this.field.width, this.field.height);
    }

    renderPlayers() {
        const ctx = this.getCanvasContext();

        if (ctx) {
            this.players.forEach((player: Player) => {
                ctx.beginPath();
                ctx.lineWidth = 3;
                ctx.fillStyle = "#fff";
                ctx.fillRect(player.positionX, player.positionY, player.width, player.height);
                ctx.stroke();
            })
        }
    };

}
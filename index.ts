import { Field } from "./src/Field.js";
import { Game } from "./src/Game.js";
import { LeftPlayer } from "./src/LeftPlayer.js";
import { RightPlayer } from "./src/RightPlayer.js";

const FIELD_WIDTH = 1000;
const FIELD_HEIGHT = 600;


//instanciar field
const field = new Field(FIELD_WIDTH, FIELD_HEIGHT);


//instanciar dois players
const leftPlayer = new LeftPlayer(20, 100, 100, 10);
const rightPlayer = new RightPlayer(20, 100, FIELD_WIDTH - 20 - 100, 10);

new Game(field, [ rightPlayer, leftPlayer ])



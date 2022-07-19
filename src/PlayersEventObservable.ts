import { Player } from "./Player.js";



export class PlayersEventObservable {
    private observers: Player[];
    // cada instância da classe Observer
    // começa com um array vazio de observadores/observers
    // que reagem a uma mudança de estado
    constructor() {
      this.observers = [];
    }
  
    // adicione a capacidade de inscrever um novo objeto / Elemento DOM
    // essencialmente, adicione algo ao array de observadores
    subscribe(f: any) {
      this.observers.push(f);
    }
  
    // adicione a capacidade de cancelar a inscrição de um objeto em particular
    // essencilamente, remove algum item do array de observadores
    unsubscribe(f: any) {
      this.observers = this.observers.filter(subscriber => subscriber !== f);
    }
  
    // atualiza todos os objetos inscritos / Elementos DOM
    // e passa alguns dados para cada um deles
    notify(event: KeyboardEvent) {
      console.log(event.key);
      this.observers.forEach((player: Player) => player.handleMoveEvent(event));
    }
  }

module BlindBiddin {
  
  export class App {
    constructor(numCardsP) {
      this.m_Game = new Game(numCardsP);
    }

    private m_Game: Game;

    public getNumCards() { return this.m_Game.getNumCards(); }
  }

  export class Game { 
    constructor(numCards: number) {
      this.m_NumCards = numCards;
    }

    private m_NumCards = 0;
    private m_players: any = [];
    private m_Kitty: Player = new Player("kitty");

    public getPlayers() { return this.m_players; }

    public getNumCards() { return this.m_NumCards; }

    public addPlayer(player: Player) { 
      this.m_players.push(player)
    }

    public getKitty() {
      return this.m_Kitty;
    }

    public deal() {
      var currentCard = 0;
      var num_players = this.m_players.length+1; // include the kitty
      while (currentCard < this.m_NumCards) {
        if (currentCard % num_players == num_players-1) {
          this.m_Kitty.addToHand(currentCard+1);
        } else {
          this.m_players[(currentCard % num_players)].addToHand(currentCard+1);
        }
        currentCard++;
      }
    }

    public executeTrick() {

    }

    public run() {
      var result = new GameResult();
      while (this.m_Kitty.getHand().length > 0) {
        //this.executeTrick(this.m_Kitty.getHand().length-1);
        //this.m_Kitty.getHand().pop();
      }
      result.setWinner(this.m_players[0]);
      return result;
    }
  }

  export class Player {
    constructor(name: string) {
      this.m_Name = name;
    }

    private m_Name = "";
    private m_Score = 1;
    private m_Hand: any = [];

    getName(): string { return this.m_Name; }

    getScore(): number { return this.m_Score; }

    getHand(): any { return this.m_Hand; }

    addToHand(card: number) { this.m_Hand.push(card); }

  }

  export class GameResult {
    private m_Winner: Player = null;

    getWinner(): Player { return this.m_Winner; }
    setWinner(player: Player) { 
      this.m_Winner = player; 
    
    }
  }
}

var app = new BlindBiddin.App(50);




























/*// Interface
interface IPoint {
    getDist(): number;
}

// Module
module Shapes {

    // Class
    export class Point implements IPoint {
        // Constructor
        constructor (public x: number, public y: number) { }

        // Instance member
        getDist() { return Math.sqrt(this.x * this.x + this.y * this.y); }

        // Static member
        static origin = new Point(0, 0);
    }

}

// Local variables
var p: IPoint = new Shapes.Point(3, 4);
var dist = p.getDist();
*/

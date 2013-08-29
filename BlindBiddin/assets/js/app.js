var BlindBiddin;
(function (BlindBiddin) {
    var App = (function () {
        function App(numCardsP) {
            this.m_Game = new Game(numCardsP);
        }
        App.prototype.getNumCards = function () {
            return this.m_Game.getNumCards();
        };
        return App;
    })();
    BlindBiddin.App = App;    
    var Game = (function () {
        function Game(numCards) {
            this.m_NumCards = 0;
            this.m_players = [];
            this.m_Kitty = new Player("kitty");
            this.m_NumCards = numCards;
        }
        Game.prototype.getPlayers = function () {
            return this.m_players;
        };
        Game.prototype.getNumCards = function () {
            return this.m_NumCards;
        };
        Game.prototype.addPlayer = function (player) {
            this.m_players.push(player);
        };
        Game.prototype.getKitty = function () {
            return this.m_Kitty;
        };
        Game.prototype.deal = function () {
            var currentCard = 0;
            var num_players = this.m_players.length + 1;
            while(currentCard < this.m_NumCards) {
                if(currentCard % num_players == num_players - 1) {
                    this.m_Kitty.addToHand(currentCard + 1);
                } else {
                    this.m_players[(currentCard % num_players)].addToHand(currentCard + 1);
                }
                currentCard++;
            }
        };
        Game.prototype.executeTrick = function () {
        };
        Game.prototype.run = function () {
            var result = new GameResult();
            while(this.m_Kitty.getHand().length > 0) {
            }
            result.setWinner(this.m_players[0]);
            return result;
        };
        return Game;
    })();
    BlindBiddin.Game = Game;    
    var Player = (function () {
        function Player(name) {
            this.m_Name = "";
            this.m_Score = 1;
            this.m_Hand = [];
            this.m_Name = name;
        }
        Player.prototype.getName = function () {
            return this.m_Name;
        };
        Player.prototype.getScore = function () {
            return this.m_Score;
        };
        Player.prototype.getHand = function () {
            return this.m_Hand;
        };
        Player.prototype.addToHand = function (card) {
            this.m_Hand.push(card);
        };
        return Player;
    })();
    BlindBiddin.Player = Player;    
    var GameResult = (function () {
        function GameResult() {
            this.m_Winner = null;
        }
        GameResult.prototype.getWinner = function () {
            return this.m_Winner;
        };
        GameResult.prototype.setWinner = function (player) {
            this.m_Winner = player;
        };
        return GameResult;
    })();
    BlindBiddin.GameResult = GameResult;    
})(BlindBiddin || (BlindBiddin = {}));
var app = new BlindBiddin.App(50);

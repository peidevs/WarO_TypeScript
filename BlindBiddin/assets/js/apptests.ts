///<reference path='ts/qunit.d.ts' />
///<reference path='app.ts' />

test( "App Constructor", function() {
  var app = new BlindBiddin.App(50);
  ok(
    app.getNumCards() == 50, "Passed!" 
  );
});

test("Game Constructor", function () {
  var game = new BlindBiddin.Game(50);
  ok(
    game != null, "Passed!"
    );
});

test("Game has Players", function () {
  var game = new BlindBiddin.Game(50);

  ok(game.getPlayers().length == 0, "Passed!");
  game.addPlayer(new BlindBiddin.Player("John"))

  ok(game.getPlayers().length == 1, "Passed!");
});

test("Player", function () {
  var player = new BlindBiddin.Player("Bob");
  ok(player.getName() == "Bob", "Name Passed!")

  var player = new BlindBiddin.Player("Bob");
  ok(player.getScore() == 1, "Has score")
});

test("start game", function () {

  var game = new BlindBiddin.Game(3);
  game.addPlayer(new BlindBiddin.Player("Bob"));
  game.addPlayer(new BlindBiddin.Player("Joe"));
  game.deal();

  for (var i = 0; i < game.getPlayers().length; i++) {
    var player = game.getPlayers()[i];
    ok(player.getHand().length > 0, "Player "+i+": Deal gives players cards");
  }

  ok(game.getKitty() instanceof BlindBiddin.Player, "Kitty is a Player");
  ok(game.getKitty().getHand().length > 0, "Kitty got dealt");

  var result = game.run();  

  ok(game.getKitty().getHand().length == 0, "Kitty spent");

  ok(result.getWinner() instanceof BlindBiddin.Player);
  ok(result.getWinner().getScore() > 0, "Winner has a score");
});
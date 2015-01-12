var app = angular.module('tic-tac-toe', []);
app.controller('GameController', function() {
  this.pieces = [];
  for (var i = 0; i < 9; i++) {
    this.pieces.push(new Piece('<div class="cell"></div>'));
  }
});


var Piece = function(el) {
  this.el = el;
  this.player = null;
}
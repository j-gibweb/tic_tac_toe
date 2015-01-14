(function() {
  var app = angular.module('tic-tac-toe', []);

  app.directive('gameBoard', function() {
    return {
      restrict: 'E',
      templateUrl: 'board.html',
      controller: function($sce) {
        this.turn = 0;
        this.pieces = [];
        this.checkTurn = function() {
          var turn = this.turn; 
          this.turn++;
          return turn;
        };
        
        for (var i = 0; i < 9; i++) {
          var piece = new Piece();
          piece.el = $sce.trustAsHtml('<div class="cell"></div>');
          this.pieces.push(piece);
        }
      },
      controllerAs: 'game'
    };
  });

  var Piece = function() {
    var self = this;
    this.player = null;
    this.click = function($event, game) {
      var el = $($event.currentTarget);
      if (game.checkTurn() % 2 === 0) {
        el.addClass('x');
        self.player = "x";
        el.off('click');
      } else {
        el.addClass('o');
        self.player = "x";
        el.off('click');
      }
    };
  }
})();

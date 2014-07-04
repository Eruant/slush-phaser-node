/**
 * @class mainGame
 * A Phaser scene
 */
var game = require('../game'),
  localisation = require('../locale'),
  Label = require('../classes/label');

module.exports = {

  create: function () {

    game.analytics.trackEvent('scene', 'create', 'mainGame');

    game.stage.backgroundColor = '#fff';

    this.labelTitle = new Label(game.width * 0.5, game.height * 0.5, localisation[game.language].mainGame.labelTitle);
    game.add.existing(this.labelTitle);

  },

  update: function () {
    // add your game loop code here
  },

  restartGame: function () {

    game.analytics.trackEvent('scene', 'create', 'restartGame');

    game.state.start('mainMenu');
  }

};

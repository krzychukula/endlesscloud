// This example uses the Phaser 2.0.4 framework
// /http://gamemechanicexplorer.com/#follow-1
// Copyright © 2014 John Watson
// Licensed under the terms of the MIT License



var game = new Phaser.Game(848, 450, Phaser.AUTO, 'game');
game.state.add('game', GameState, true);
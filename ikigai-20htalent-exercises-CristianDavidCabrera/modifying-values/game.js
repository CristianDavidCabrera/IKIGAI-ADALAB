let game;
let player;
let platforms;
let badges;
let coins;
let cursors;
let jumpButton;
let text;
let winningMessage;
let won = false;
let currentScore = 0;
const winningScore = 100;

function createCoins() {
    coins = game.add.physicsGroup();

    coinCreate(375, 100, 'coin');

}

function createPlatforms() {
    platforms = game.add.physicsGroup();

    platforms.create(300, 200, 'platform');
    platforms.create(400, 450, 'platform2');
    platforms.create(100, 450, 'platform');

    platforms.setAll('body.immovable', true);
}

function createBadge() {
    badges = game.add.physicsGroup();

    const badge = badges.create(550, 450, 'badge');
    badge.animations.add('spin');
    badge.animations.play('spin', 10, true);
}

function coinCreate(left, top, coinImage) {
    const coin = coins.create(left, top, coinImage);
    coin.animations.add('spin');
    coin.animations.play('spin', 10, true);
}

function collectHandler(player, coin) {
    coin.kill();
    currentScore = currentScore + 10;
    if (currentScore === winningScore) {
        createBadge();
    }
}

function collectBadgeHandler(player, badge) {
    badge.kill();
    won = true;
}

window.onload = function () {

    game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });

    function preload() {

        game.stage.backgroundColor = '#5db1ad';
        //Load images
        game.load.image('platform', 'platform_1.png');
        game.load.image('platform2', 'platform_2.png');
        //Load spritesheets
        game.load.spritesheet('player', 'chalkers.png', 48, 62);
        game.load.spritesheet('coin', 'coin.png', 36, 44);
        game.load.spritesheet('badge', 'badge.png', 42, 54);
    }

    function create() {

        player = game.add.sprite(50, 600, 'player');
        player.animations.add('walk');
        player.anchor.setTo(0.5, 1);

        game.physics.arcade.enable(player);

        player.body.collideWorldBounds = true;
        player.body.gravity.y = 500;

        createCoins();
        createPlatforms();

        cursors = game.input.keyboard.createCursorKeys();
        jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

        text = game.add.text(16, 16, "SCORE: " + currentScore, { font: "Press Start 2P", fontSize: 18, fill: "white" });
        winningMessage = game.add.text(game.world.centerX, 250, "", { font: "Press Start 2P", fontSize:"48px", fill: "white" });
        winningMessage.anchor.setTo(0.5, 1);

    }

    function update() {
        text.text = "SCORE: " + currentScore;
        game.physics.arcade.collide(player, platforms);
        game.physics.arcade.overlap(player, coins, collectHandler);
        game.physics.arcade.overlap(player, badges, collectBadgeHandler);

        player.body.velocity.x = 0;

        if (cursors.left.isDown) {
            player.animations.play('walk', 10, true);
            player.body.velocity.x = -300;
            player.scale.x = - 1;
        }
        else if (cursors.right.isDown) {
            player.animations.play('walk', 10, true);
            player.body.velocity.x = 300;
            player.scale.x = 1;
        }
        else {
            player.animations.stop();
        }

        if (jumpButton.isDown && (player.body.onFloor() || player.body.touching.down)) {
            player.body.velocity.y = -400;
        }
        if (won) {
            winningMessage.text = "YOU WIN!!!";
        }

    }

    function render() {

    }

};

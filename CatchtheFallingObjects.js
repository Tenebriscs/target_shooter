// PhaserJS - Catch the Falling Objects Game
let config2 = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload2,
        create: create2,
        update: update2
    }
};

let game2 = new Phaser.Game(config2);
let basket;
let objects;
let score2 = 0;
let scoreText2;

function preload2 () {
    this.load.image('basket', 'path_to_basket_image.png');
    this.load.image('object', 'path_to_falling_object.png');
}

function create2 () {
    basket = this.physics.add.image(400, 550, 'basket').setImmovable();
    objects = this.physics.add.group({
        key: 'object',
        repeat: 5,
        setXY: { x: 12, y: 0, stepX: 140 }
    });

    objects.children.iterate(function (child) {
        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    });

    scoreText2 = this.add.text(10, 10, 'Score: 0', { fontSize: '32px', fill: '#fff' });

    this.physics.add.collider(basket, objects, catchObject, null, this);
}

function update2 () {
    if (this.input.keyboard.isDown(Phaser.Input.Keyboard.KeyCodes.LEFT)) {
        basket.x -= 5;
    } else if (this.input.keyboard.isDown(Phaser.Input.Keyboard.KeyCodes.RIGHT)) {
        basket.x += 5;
    }
}

function catchObject (basket, object) {
    object.disableBody(true, true);
    score2 += 10;
    scoreText2.setText('Score: ' + score2);
}
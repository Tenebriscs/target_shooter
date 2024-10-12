// PhaserJS - Target Shooter Game
let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

let game = new Phaser.Game(config);
let score = 0;
let scoreText;
let target;

function preload () {
    this.load.image('target', 'path_to_target_image.png');
}

function create () {
    scoreText = this.add.text(10, 10, 'Score: 0', { fontSize: '32px', fill: '#fff' });
    createTarget.call(this);
}

function createTarget() {
    let x = Phaser.Math.Between(100, 700);
    let y = Phaser.Math.Between(100, 500);

    target = this.add.image(x, y, 'target').setInteractive();
    target.on('pointerdown', function () {
        score += 10;
        scoreText.setText('Score: ' + score);
        target.destroy();
        createTarget.call(this);
    }, this);
}

function update() {}
//Criar variáveis

var macaco;
var obstaculo;
var banana;
var gaviao;
var pontuacao = 0;
var placar;


class JogoScene extends Phaser.Scene {
  constructor() {
    super({ key: "JogoScene" });
  }

    
  // Carregar imagens necessárias para a tela inicial
  preload() {
    this.load.image("background", "../assets/background.jpg");
    this.load.image("obstaculo", "../assets/obstaculo.png");
    this.load.image("banana", "../assets/banana.png");
    this.load.image("macaco", "../assets/macaco.png");
    this.load.image("gaviao", "../assets/gaviao.png");
  }

  // Adicionar imagens na tela inicial do jogo
  create() {
    this.add.image(larguraJogo / 2, alturaJogo / 2, "background").setScale(3);  

    // Criar macaco
    macaco = this.physics.add.sprite(700, 0, 'macaco').setScale(0.1);
    // Impedir que personagem atravesse barreira da imagem
    macaco.setCollideWorldBounds(true); 

    // Acessar as setas do teclado 
    this.teclado = this.input.keyboard.createCursorKeys();


    // Adicionar obstáculo galho
    obstaculo = this.physics.add.staticImage(125, 500, 'obstaculo').setScale(0.2);
    // Adicionar colisão
    this.physics.add.collider(macaco, obstaculo);

    // Adicionar banana
    banana = this.physics.add.image(larguraJogo/2, 0, 'banana').setScale(0.05);
    // Impedir que banana atravesse barreira da imagem
    banana.setCollideWorldBounds(true);
    // Movimento de "quicar" da banana
    banana.setBounce(0.7);
    // Adicionar colisão
    this.physics.add.collider(banana, obstaculo);

    // Adicionando placar 
    placar = this.add.text(50, 50, 'Bananinhas:' + pontuacao, {fontSize:'45px', fill:'#495613'}); 

    // Quando o macaco encostar na banana
    this.physics.add.overlap(macaco, banana, function(){

    banana.setVisible(false); // banana fica "invisível"

    var posicaoBanana_Y = Phaser.Math.RND.between(50, 650); // Sorteia número

    banana.setPosition(posicaoBanana_Y, 100); // Ajustar posição da banana

    pontuacao +=1; // Soma pontuação
    placar.setText('Bananinhas:' + pontuacao); // Atualizar texto do placar

    banana.setVisible(true); // Ativa a visão da "nova banana"
    });
}
    

  update() {

        // Movimento para esquerda [ <- ]
        if (this.teclado.left.isDown) {
            macaco.setVelocityX(-150); }

        // Movimento para direita [ -> ]
        else if (this.teclado.right.isDown) {
            macaco.setVelocityX(150); }

        // Sem movimento horizontal [ x = 0 ]
        else {
            macaco.setVelocityX(0);
        }

        // Movimento para cima [ ^ ]
        if (this.teclado.up.isDown) {
            macaco.setVelocityY(-150);
        }

    //loop while
    var contador = 0;

    // Imprima perdedor enquanto o contador for menor que 10
    while (banana < 10) {
        console.log("perdedor");
        contador++
    };
}
};
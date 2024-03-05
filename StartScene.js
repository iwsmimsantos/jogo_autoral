 
// Criar variáveis de altura e largura do jogo
const larguraJogo = 800;
const alturaJogo = 540;
var instrucao;

var startHistory;

class StartScene extends Phaser.Scene {
  constructor() {
    super({ key: "StartScene" });
  }

  // Carregar imagens necessárias para a tela inicial
  preload() {
    this.load.image("background", "../assets/background.jpg");
    this.load.image("startHistory", "../assets/startHistory.png");
  }

  // Adicionar imagens na tela inicial do jogo
  create() {
    this.add.image(larguraJogo / 2, alturaJogo / 2, "background").setScale(3);
  
    // Adicionar um botão para iniciar modo história
    startHistory = this.add
      .image(larguraJogo / 2, 270, "startHistory")
      .setScale(0.8)
      .setOrigin(0.5);
    startHistory.setInteractive({ cursor: "pointer" }); // Torna o botão interativo

    // Adicionar um evento de clique ao botão de modo história
	  startHistory.on('pointerdown', () => {
		this.scene.start('JogoScene') //Comeca a cena x
      
     });

     instrucao = this.add.text(45, 180, 'Faça o macaco pegar 10 bananinhas usando as setas do seu teclado (<- ; -> ; ^)', {fontSize:'15px', fill:'#495613'}); 
  }

  update() {
    startHistory.on("pointerover", function () {
      // Diminuir o tamanho quando o mouse passar por cima
      startHistory.setScale(0.75);
    });
    // Adicionar evento de tirar o mouse de cima
    startHistory.on("pointerout", function () {
      startHistory.setScale(0.8);
      // Voltar ao tamanho original quando o mouse sair
    });

  }
}
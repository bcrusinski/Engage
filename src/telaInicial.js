class TelaInicial extends Phaser.Scene {
  constructor() {
    super({ key: 'TelaInicial' });
  }
  preload() {
    // Carrega as imagens do background (FundoCinza, Fundo Quadriculado, Casa)
    this.load.image("fundoCinza", "/assets/telaInicial/fundo_cinza.png");
    this.load.image("fundoQuadriculado", "/assets/telaInicial/fundo_quadriculado.png");
    this.load.image("Casa", "/assets/casaInicial/casa.png");

    // Carrega a logo (Engage)
    this.load.image("logoEngage", "/assets/telaInicial/logo.png");

    // Texto Botoes (texto: 'Jogar', 'Opções')
    this.load.image("txtBtnJogar", "/assets/telaInicial/jogar.png");
    this.load.image("txtBtnOpcoes", "/assets/telaInicial/opções.png");

    // Assets botões centrais (Jogar, Opções)
    this.load.image("backgroundBotao", "/assets/telaInicial/botoes/botao.png");
    this.load.image("sombraBotao", "/assets/telaInicial/botoes/botao-sombra.png");

    // Assets botões laterais (Config, Musica, Som, Opções)
    this.load.image("btnConfig", "/assets/telaInicial/botoes/configurações.png");
    this.load.image("btnMusica", "/assets/telaInicial/botoes/musica.png");
    this.load.image("btnSom", "/assets/telaInicial/botoes/som.png");
  }
  create() {
    // * Cria o cenário de fundo em camadas *
    // Ordem das camadas: fundoQuadriculado -> casa -> fundoCinza (62% de opacidade)
    this.add.image(gameState.mediaWidth, gameState.mediaHeight, "fundoQuadriculado").setScale(1.2);
    // Adiciona e justa as dimensões da casa de acordo com o tamanho da tela
    let casaBackground = this.add.image(gameState.mediaWidth, gameState.mediaHeight, "Casa");
    casaBackground.setScale(gameState.gameHeight / casaBackground.height);
    // Define a opacidade do fundo para 62%
    this.add.image(gameState.mediaWidth, gameState.mediaHeight, "fundoCinza").setAlpha(0.62).setScale(2);

    // Adiciona a logo na tela (Engage)
    this.add.image(gameState.mediaWidth - 20, gameState.mediaHeight - 110, "logoEngage").setScale(0.5);

    // Adiciona sombra nos botoes de Jogar e Opções
    this.add.image(gameState.mediaWidth, gameState.mediaHeight + 35, "sombraBotao").setScale(0.5);
    this.add.image(gameState.mediaWidth, gameState.mediaHeight + 135, "sombraBotao").setScale(0.5);

    // Cria os botoes (Jogar, Opções) na tela
    var btnJogar = this.add.image(gameState.mediaWidth, gameState.mediaHeight + 20, "backgroundBotao").setScale(0.5);
    var btnOpcoes = this.add.image(gameState.mediaWidth, gameState.mediaHeight + 120, "backgroundBotao").setScale(0.5);

    // Cria os botoes (Config, Musica, Som) na tela
    var btnConfig = this.add.image(gameState.gameWidth - 45, 45, "btnConfig").setScale(0.5);
    var btnMusica = this.add.image(gameState.gameWidth - 45, 115, "btnMusica").setScale(0.5);
    var btnSound = this.add.image(gameState.gameWidth - 45, 185, "btnSom").setScale(0.5);

    // Cria os textos ("Jogar", "Opções") na tela
    var txtBtnJogar = this.add.image(gameState.mediaWidth, btnJogar.y, "txtBtnJogar").setScale(0.5);
    var txtBtnOpcoes = this.add.image(gameState.mediaWidth, btnOpcoes.y, "txtBtnOpcoes").setScale(0.5);

    // Define os botões interativo
    btnJogar.setInteractive();
    btnOpcoes.setInteractive();
    btnConfig.setInteractive();
    btnMusica.setInteractive();
    btnSound.setInteractive();

    // Define uma variável para que possa modificar a duração do movimento dos dois botões ao mesmo tempo
    var duracaoMovBtn = 500;

    // Função que realiza o movimento do botao (btnJogar) e do texto (txtBtnJogar)
    this.tweens.add({
      targets: [btnJogar, txtBtnJogar],
      duration: duracaoMovBtn,
      y: btnJogar.y + 12,     // Posição até onde o btnJogar e o txtBtnJogar vai ir
      repeat: -1, // Define a animação como infinita
      yoyo: true  // Define que sera um movimento continuo
    });

    // Função que realiza o movimento do botao (btnOpcoes) e do texto (txtBtnOpcoes)
    this.tweens.add({
      targets: [btnOpcoes, txtBtnOpcoes],
      duration: duracaoMovBtn,
      y: btnOpcoes.y + 12,     // Posição até onde o btnOpcoes e o txtBtnOpcoes vai ir
      repeat: -1, // Define a animação como infinita
      yoyo: true  // Define que sera um movimento continuo
    });

    // * Modifica - Botoes Centrais *
    // Define que ao colocar o mouse em cima do botão
    // o cursor será trocado para a "mãozinha" / pointer
    // Botoes: Jogar, Opções
    btnJogar.on("pointerover", () => {
      this.input.setDefaultCursor("pointer");
    });
    btnOpcoes.on("pointerover", () => {
      this.input.setDefaultCursor("pointer");
    });

    // * Reset - Botoes Centrais *
    // Define que ao tirar o mouse em cima do botão
    // o tipo do cursor voltara ao seu padrão
    // Botoes afetados: Jogar, Opções
    btnJogar.on("pointerout", () => {
      this.input.setDefaultCursor("default");
    });
    btnOpcoes.on("pointerout", () => {
      this.input.setDefaultCursor("default");
    });

    // * Modifica - Botoes Laterais *
    // Define que ao colocar o mouse em cima do botão
    // o cursor será trocado para a "mãozinha" / pointer
    // e aumentara o botao selecionado
    // Botoes afetados: Config, Musica, Sound
    btnConfig.on("pointerover", () => {
      this.input.setDefaultCursor("pointer");
      btnConfig.setScale(0.6);
    });
    btnMusica.on("pointerover", () => {
      this.input.setDefaultCursor("pointer");
      btnMusica.setScale(0.6);
    });
    btnSound.on("pointerover", () => {
      this.input.setDefaultCursor("pointer");
      btnSound.setScale(0.6);
    });

    // * Reset - Botoes Laterais *
    // Define que ao colocar o mouse em cima do botão
    // o tipo do cursor voltara ao seu padrão
    // e voltara o tamanho do botão ao normal
    // Botoes afetados: Config, Musica, Sound
    btnConfig.on("pointerout", () => {
      this.input.setDefaultCursor("default");
      btnConfig.setScale(0.5);
    });
    btnMusica.on("pointerout", () => {
      this.input.setDefaultCursor("default");
      btnMusica.setScale(0.5);
    });
    btnSound.on("pointerout", () => {
      this.input.setDefaultCursor("default");
      btnSound.setScale(0.5);
    });

    // * Ação de clique nos botões *
    // Define o que cada botão tem que executar quando pressionado
    // Botões afetados: Jogar, Opcoes, Config, Musica, Som

    // * Botões Centrais *
    // Direciona o Jogador para o primeiro cenário
    btnJogar.on("pointerdown", () => {
      this.cameras.main.fadeOut(1000, 209, 209, 209, (camera, progress) => {
        // Quando a transição estiver concluída, carrega o novo cenário
        if (progress == 1) {
          this.children.removeAll(true, true);
          this.add.image(480, 270, "Casa");
          this.scene.start('CasaInicial');
          this.scene.stop('TelaInicial');
        }
      });
    });

    btnOpcoes.on("pointerdown", () => {
      console.log("logo mais teremos mais opções!");
    });

    // * Botões Laterais *
    btnConfig.on("pointerdown", () => {
      console.log("espere um pouco as configurações estão sendo construídas");
    });
    btnMusica.on("pointerdown", () => {
      console.log("ainda não temos uma música disponível");
    });
    btnSound.on("pointerdown", () => {
      console.log("o som não existe por enquanto");
    });
  }
}

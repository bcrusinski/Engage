var config = {
    type: Phaser.AUTO,
    width: 960, //define a largura do quadro
    height: 540, //define a altura do quadro

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload(){ //faz upload das imagens
    this.load.image("fundo", "assets/fundo.png");
    this.load.image("logo", "assets/logo.png");
    this.load.image("botao", "assets/botao.png");
    this.load.image("botao-sombra", "assets/botao-sombra.png");
    this.load.image("configuracoes", "assets/configurações.png");
    this.load.image("musica", "assets/musica.png");
    this.load.image("som", "assets/som.png");
    this.load.image("opcoes", "assets/opções.png");
    this.load.image("jogar", "assets/jogar.png");
}
function create(){
    //adiciona as imagens na tela em uma escala de 0.5
    this.add.image(480, 270, "fundo").setScale(0.5);
    this.add.image(460, 160, "logo").setScale(0.5);
    this.add.image(480, 305, "botao-sombra").setScale(0.5);
    this.add.image(480, 405, "botao-sombra").setScale(0.5);

    //relaciona os botões a variaveis que serão uteis para torna-los interativos
    var botao1 = this.add.image(480, 295, "botao").setScale(0.5); 
    var botao2 = this.add.image(480, 395, "botao").setScale(0.5);
    var config = this.add.image(915, 70, "configuracoes").setScale(0.5);
    var music = this.add.image(915, 140, "musica").setScale(0.5);
    var sound = this.add.image(915, 210, "som").setScale(0.5);

    //adiciona as sprites de opções e jogar
    var opcoes = this.add.image(480, 395, "opcoes").setScale(0.5);
    var jogar = this.add.image(480, 295, "jogar").setScale(0.5);

    //torna os botões interativo
    botao1.setInteractive(); 
    botao2.setInteractive(); 
    config.setInteractive();
    music.setInteractive();
    sound.setInteractive();
    
    //define uma variavel para que possa modificar a duração do movimento dos dois botões ao mesmo tempo
    var duration = 300;

    this.tweens.add({
      targets: [botao1, jogar],
      duration: duration,
      y: 302, //posição até onde o botão e o jogar vai ir
      repeat: -1, // informa a quantidade de vezes que o movimento vai se repitir, o número negativo torna infinito
      yoyo: true //faz com que o movimento seja um loop
    });

    this.tweens.add({
      targets: [botao2, opcoes],
      duration: duration,
      y: 402, //posição até onde o botão e o opcoesvai ir
      repeat: -1, // informa a quantidade de vezes que o movimento vai se repitir, o número negativo torna infinito
      yoyo: true //faz com que o movimento seja um loop
    });

    //faz com que o ponteiro do mouse seja a mãozinha quando estiver em cima do botão
    //faz com que o botão aumente o seu tamanho
    botao1.on("pointerover", () => {
        this.input.setDefaultCursor("pointer");
        //botao1.y += 5;
        //jogar.y += 5;
      });
    botao2.on("pointerover", () => {
        this.input.setDefaultCursor("pointer");
        //botao2.y += 5;
        //opcoes.y +=5;
      });
    config.on("pointerover", () => {
        this.input.setDefaultCursor("pointer");
        config.setScale(0.6); 
      });
    music.on("pointerover", () => {
        this.input.setDefaultCursor("pointer");
        music.setScale(0.6); 
      });
    sound.on("pointerover", () => {
        this.input.setDefaultCursor("pointer");
        sound.setScale(0.6); 
      });

    //faz com que o ponteiro do mouse seja a seta quando estiver fora do botão
    //faz com que o botão volte a ter a aparência normal
    botao1.on("pointerout", () => {
        this.input.setDefaultCursor("default");
        //botao1.y -= 5;
        //jogar.y -= 5;
      });
    botao2.on("pointerout", () => {
        this.input.setDefaultCursor("default");
        //botao2.y -= 5;
        //opcoes.y -= 5;
      });
    config.on("pointerout", () => {
        this.input.setDefaultCursor("default");
        config.setScale(0.5);
      });
    music.on("pointerout", () => {
        this.input.setDefaultCursor("default");
        music.setScale(0.5);
      });
    sound.on("pointerout", () => {
        this.input.setDefaultCursor("default");
        sound.setScale(0.5);
      });

    //configura um console log para quando os botões são pressionados
    botao1.on("pointerdown", () => {
        console.log("o jogo ainda não está pronto!");
      });
    botao2.on("pointerdown", () => {
        console.log("logo mais teremos mais opções!");
      });
    config.on("pointerdown", () => {
        console.log("espere um pouco as configurações estão sendo construídas");
      });
    music.on("pointerdown", () => {
        console.log("ainda não temos uma música disponível");
      });
    sound.on("pointerdown", () => {
        console.log("o som não existe por enquanto");
      });
}
function update(){
  
}

class CasaInicial extends Phaser.Scene {
  constructor() {
    super({ key: 'CasaInicial' });
  }

  preload() {
    //! Provisório
    // Carrega a imagem da casa
    this.load.image("Casa", "/../assets/casaInicial/casa.png");
  }

  create() {
    //! Provisório
    // Adiciona e justa as dimensões da casa de acordo com o tamanho da tela
    let casaBackground = this.add.image(gameState.mediaWidth, gameState.mediaHeight, "Casa");
    casaBackground.setScale(gameState.gameHeight / casaBackground.height);
    this.cameras.main.setBackgroundColor('#d1d1d1'); // Substitua '#ff0000' pela cor desejada em formato hexadecimal.
  
  }
}
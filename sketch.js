//dimensões da janela
const LARGURA_JANELA = 600;
const ALTURA_JANELA = 400;

// variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2 ;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

let raqueteComprimento = 10;
let raqueteAltura = 90;

// variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;

// variaveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

function setup() {
  createCanvas(LARGURA_JANELA, ALTURA_JANELA);
}

function draw() {
    background(0); //1 - Desenha o background
    mostraBolinha(); // 2 - Desenha a bolinha
    movimentaBolinha(); // 3 - Movimenta a Bolinha
    verificaColisaoBorda(); // 4 - Verifica Colisão da bolinha
    mostraRaquete(xRaquete, yRaquete); // 5 - Desenha a raquete
    movimentaMinhaRaquete(); // 6 - Movimenta a raquete
    verificaColisaoRaquete(); //
    mostraRaquete(xRaqueteOponente, yRaqueteOponente); //
    movimentaRaqueteOponente();
    verificaColisaoRaqueteOponente();
    incluiPlacar();
    marcaPonto();
    
   
    // 7- Volta para o início da função draw()
}

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);

}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda(){
   //se estiver tocando a borda
   if (xBolinha + raio > width || 
    xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
}

if (yBolinha + raio > height || 
  yBolinha - raio < 0) {
    velocidadeYBolinha *= -1;
}

}

function mostraRaquete(x, y){
  rect(x, y, raqueteComprimento, 
    raqueteAltura); 
}


function movimentaMinhaRaquete(){
  // verificar se a arrow está precionada para up ou para down
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
  
}

function verificaColisaoRaquete(){
  
  if (xBolinha - raio < xRaquete + raqueteComprimento && 
      yBolinha - raio < yRaquete + raqueteAltura &&
      yBolinha + raio > yRaquete){ 
    velocidadeXBolinha *= -1;
  }
  
}

function verificaColisaoRaqueteOponente() {
  if (xBolinha + raio > xRaqueteOponente 
  && yBolinha - raio < yRaqueteOponente + raqueteAltura
  && yBolinha + raio > yRaqueteOponente){
  velocidadeXBolinha *= -1
  }
  }

function movimentaRaqueteOponente() {
  velocidadeYOponente = yBolinha -yRaqueteOponente - raqueteComprimento / 2 - 30;
  yRaqueteOponente += velocidadeYOponente
}

function incluiPlacar(){
  fill(255)
  text(meusPontos, 278, 26);
  text(pontosDoOponente, 321, 26)
}

function marcaPonto(){
  if (xBolinha >= LARGURA_JANELA - raio){
    meusPontos += 1;
  
  }
  if (xBolinha <= raio){
    pontosDoOponente += 1;
  
  }
}



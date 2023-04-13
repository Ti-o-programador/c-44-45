var URSS, Alemanha, EUA, Japao, reinoUnido, Italia;

var paisesdoMundo;

var gameState = "start";

var buttonT, buttonC;


function preload() {

}

function setup() {
  createCanvas(windowWidth, windowHeight);

  URSS = createSprite(width / 2 + 200, 200, 30, 20);
  URSS.shapeColor = "red";

  Alemanha = createSprite(width / 2 - 50, 400, 30, 20);

  EUA = createSprite(200, 200, 30, 20);
  EUA.shapeColor = "blue";

  Japao = createSprite(width / 2 + 500, 400, 30, 20);
  Japao.shapeColor = "white";

  reinoUnido = createSprite(width / 2 - 100, 150, 30, 20);
  reinoUnido.shapeColor = "blue";

  Italia = createSprite(width / 2 - 50, 700, 30, 20);
  Italia.shapeColor = "green";

  buttonT = createButton("Confirmar");
  buttonT.position(width/2, height/2);

  buttonC = createButton("Cancelar");
  buttonC.position(width/2 -100, height/2);
  
  buttonT.hide();
  buttonC.hide();

}

function draw() {
  background(0);

  if (gameState == "start") {
    escolher();
  }

  if (gameState == "início") {
    Japao.destroy();
    EUA.destroy();
    Alemanha.destroy();
    URSS.destroy();
    Italia.destroy();
    reinoUnido.destroy();
  }

  drawSprites();
}

function escolher() {
  if (mousePressedOver(EUA)) {
    EUA.width = 60;
    EUA.height = 40;
    paisesdoMundo = "EUA";
    buttonT.show();
    buttonC.show();
  }

  if (mousePressedOver(URSS)) {
    URSS.width = 60;
    URSS.height = 40;
    paisesdoMundo = "URSS";
    buttonT.show();
    buttonC.show();
  }

  if (mousePressedOver(Japao)) {
    Japao.width = 60;
    Japao.height = 40;
    paisesdoMundo = "Japao";
    buttonT.show();
    buttonC.show();
  }

  if (mousePressedOver(Italia)) {
    Italia.width = 60;
    Italia.height = 40;
    paisesdoMundo = "Italia";
    buttonT.show();
    buttonC.show();
  }

  if (mousePressedOver(reinoUnido)) {
    reinoUnido.width = 60;
    reinoUnido.height = 40;
    paisesdoMundo = "reinoUnido";
    buttonT.show();
    buttonC.show();
  }

  if (mousePressedOver(Alemanha)) {
    Alemanha.width = 60;
    Alemanha.height = 40;
    paisesdoMundo = "Alemanha";
    buttonT.show();
    buttonC.show();
  }



}

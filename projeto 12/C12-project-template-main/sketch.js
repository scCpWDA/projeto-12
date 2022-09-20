var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  pathImg = loadImage("path.png");//loadImage (carregarImagem) da pista)
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");//loadAnimation (carregarAnimação) de corrida para o menino
 
}

function setup(){
  
  createCanvas(400,400);
 path = createSprite(200,200)//crie um sprite para a pista 
path.addImage(pathImg);//adicione uma imagem para a pista
path.velocityY=4//Faça com que a pista seja um fundo que se move dando a ela velocity Y.
path.scale=1.2;

boy = createSprite(180,340);//crie um sprite de menino
boy.addAnimation("running",boyImg);//adicione uma animação de corrida para ele
boy.scale=0.08;
  
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible=false;//defina visibilidade como falsa para o limite à esquerda

//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible=false;//defina visibilidade como falsa para o limite à direita
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  boy.x=World.mouseX;// mover o menino com o mouse usando mouseX
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(rightBoundary);// colidir o menino com os limites invisíveis da esquerda e da direita
  boy.collide(leftBoundary);
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}

let spriteSheet;
let x1=0;
let x2=0;
let dr1,dr2;

function preload(){
 spriteSheet = loadImage('bigguy.png');

}
function setup() {
  createCanvas(800, 800);
  // lets download
  noCursor();
  getDanceRates();

}

function getDanceRates(){
  dr1 = floor(random(3,20))
  dr2 = floor(random(3,20))
  print(dr1,dr2)

}

function mouseClicked(){
  // change the dance rate based on mouse click and y position
  if(mouseY < height/2){
    dr1=dr1-1
  } else{
    dr1=dr1+1
  }
  print(dr1,dr2)
}

function draw() {
  background(220);
  fill(255,0,0)
  line(0,height/2,width,height/2)
  let anaframe1 = spriteSheet.get(x1%(128*5),0,128,128); // module spriteSheet length
  let anaframe2 = spriteSheet.get(x2%(128*5),130,128,128)
  noTint();
  image(anaframe1, mouseX,mouseY,200,200);
  tint(0,0,255)
  image(anaframe2,width/2,(height/2)-64,200,200)
  if (frameCount%dr1==0){ // speed for first sprite
    x1=x1+128 // each sprites length

  }
  if (frameCount%dr2==0){  // speed for second sprite
    x2=x2+128 // exach
  }
  
   

}
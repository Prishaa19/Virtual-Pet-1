var dog;
var happyDog;
var FoodS;
var FoodStock;
var database;

function preload()
{
dogImage = loadImage("images/dogImg.png");
happyDog = loadImage ("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  dog = createSprite(200,200,50,50);
  
  dog.addImage(dogImage);
  dog.scale = 0.5;
 
  FoodStock = database.ref('Food');
  FoodStock.on("value",readStock,showError);
  
}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){
  writeStock(FoodS);
  console.log("hello");
  dog.addImage(happyDog);
  
  }

  drawSprites();
  }

function readStock (data){
  FoodS = data.val();
  console.log(FoodS);
}

function writeStock (x){
if(x<=0){
  x=0;
}
else{
  x= x-1;
}

console.log(x);
database.ref('/').update({
Food:x
})
}



function showError (){
  console.log("error");
}


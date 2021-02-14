//Create variables here
var dog, happyDog, database, foodS, foodStock

function preload()
{
  this.dog = loadImage("doglmg.png");
  this.happyDog = loadImage("doglmg1.png")
}

function setup() {
	createCanvas(500, 500);
  addImage(dog, "doglmg.png");
  foodStock=database.ref('Food');
  foodStock.onn("value", readStock);
}


function draw() {  
  background(46, 139, 87)
  drawSprites();
  if(keyWentDown(UP_Arrow)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }
  //add styles here

readStock();
writeStock();

}

function readStock(data){
  foodS-data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}


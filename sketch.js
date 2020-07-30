var database , food , dog;
//Create variables here


function preload()
{
  //load images here
  dog1 = loadImage("dogImg.png");
  dog2 = loadImage("dogIMG1.png");
  
}

function setup() {
	createCanvas(500, 500);
  
  dog = createSprite(350,250,20,20);
  dog.image(dog1,dog.x,dog.y,50,50);

  database = firebase.database();

  food = database.ref("needs");

  feed = createButton("Feed the dog");
  feed.position(400,100);
  feed.mousePressed(feedDog);

  addFood=createButton("Add Food");
  addFood.position(300,100);
  addFood.mousePressed(addFoods);

}


function draw() {  
  background(0, 255, 255);

  if(keyCode === 32)
  {
    food = food - 1
    dog.image(dog2,dog.x,dog.y,50,50);
  }

  if(lastfed>=12)
  {
    text("Last Feed : " + lastfed%12 + " PM ", 350,30);
  }
  else if(lastfed==0)
{
  text("Last Feed : 12 AM", 350,30);
}
else 
{
  text("Last Feed : " + lastfed + " AM ",350,30);
}

  drawSprites();
  //add styles here

}

function writePosition(x,y){
  database.ref('needs').set({
    'food': food
  })
}

function readPosition(data){
  food1 = data.val();
  console.log(food1);
  food = food1;
}



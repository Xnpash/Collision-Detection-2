var movingRect,fixedRect;
var gameObject1,  gameObject2,gameObject3,gameObject4
function setup() {
  createCanvas(800,400);
  movingRect=createSprite (100, 100, 35, 65);
  fixedRect = createSprite (200,200,31,17);
  movingRect.shapeColor="green";
  fixedRect.shapeColor="pink";
  gameObject1=createSprite(100,100,50,50)
  gameObject2=createSprite(200,100,50,50)
  gameObject3=createSprite(300,100,50,50)
  gameObject4=createSprite(400,100,50,50)
  gameObject1.shapeColor="yellow"
  gameObject2.shapeColor="yellow"
  gameObject3.shapeColor="yellow"
  gameObject4.shapeColor="yellow"
}

function draw() {
  background(0); 

  movingRect.x=mouseX;
  movingRect.y=mouseY;
  
 //  console.log(movingRect.x-fixedRect.x);
  // console.log(movingRect.width/2+fixedRect.width/2);

 if (isTouching(movingRect,gameObject1)){
      movingRect.shapeColor="orange"
      gameObject1.shapeColor="purple"
  }else{
      movingRect.shapeColor="green";
      gameObject1.shapeColor="yellow";
  }


  drawSprites();
}

function isTouching(obj1, obj2){
  if(obj1.x-obj2.x<=obj1.width/2+obj2.width/2
    && obj2.x-obj1.x<=obj1.width/2+obj2.width/2
    && obj1.y-obj2.y<=obj1.height/2+obj2.height/2
    && obj2.y-obj1.y<=obj1.height/2+obj2.height/2
    ){obj1
      return true;
    }else{
    
    return false;  
  }
}
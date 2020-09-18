var ball;
var position,database;

function setup(){
    createCanvas(500,500);
    database = firebase.database();
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    position = database.ref("ball/position")
    position.on("value",readvalue,showerror)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writeposition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writeposition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writeposition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writeposition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}
function readvalue(data){
    position = data.val();
    console.log(position.x);
    ball.x = position.x
    ball.y = position.y

}
function showerror(){
    console.log("error")
}
function  writeposition(x,y){
database.ref('ball/position').set({
    'x': position.x+x,
    'y': position.y+y
})

}

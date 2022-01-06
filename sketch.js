    var ball, ballimg; 
    var basket1, basket2, bakset1img, basket2img; 
    var wall1, wall2, wall3, wall4; 
    var wall5, wall6, wall7; 
    var tri_blue, tri_blue_img;
    var tri_red, tri_red_rt, tri_red_img, tri_red_lt;
    var tri_orange, tri_orange_img; 
    var paddle_lt, paddle_lt_img;
    var paddle_rt, paddle_rt_img;
    var star_bl, star_bl_img;
    var star_rd, star_rd_img,tri_red_turn_img;
    var back_img;
    var x, y;
    var score;
    var leftClicked=false;

function preload(){

    ballimg=loadImage("images/pinball.png");
    basket1img=loadImage("images/basket.png");
    basket2img=loadImage("images/basket.png");
    tri_blue_img=loadImage("images/triangle_blue.png");
    tri_orange_img=loadImage("images/triangle_orange.png");
    tri_red_img=loadImage("images/triangle_red.png");
    tri_red_turn_img=loadImage("images/triangle_red_turn.png");
    paddle_lt_img=loadAnimation("images/paddle_left1.png");
    paddle_moving_lt=loadAnimation("images/paddle_left1.png","images/paddle_left2.png")
    paddle_rt_img=loadAnimation("images/paddle_right.png");
    //paddle_moving_rt=loadAnimation()
    star_bl_img=loadImage("images/star_blue.png");
    star_rd_img=loadImage("images/star_red.png");
    back_img=loadImage("images/image1.png"); 
    score=0; 
}

function setup(){
    createCanvas(1000,800);
    
    ball=createSprite(400,10,10,10);
    ball.setCollider("circle",5,-40,25);
    ball.visible=true;
    ball.scale=0.5
    ball.debug=true;
    ball.addImage(ballimg);
    
    basket1=createSprite(300,348,10,10);
    basket1.setCollider("rectangle",0,0,250,240);
    basket1.addImage(basket1img);
    basket1.debug=true;
    basket1.scale=0.2
    basket2=createSprite(700,348,10,10);
    basket2.setCollider("rectangle",0,0,250,240);
    basket2.debug=true;
    basket2.addImage(basket2img);
    basket2.scale=0.2
    
    tri_blue=createSprite(618,200,10,10);
    tri_blue.setCollider("rectangle",-30,-10,35,60);
    tri_blue.addImage(tri_blue_img);
    tri_blue.debug=true;
    tri_red=createSprite(475,465,10,10);
    tri_red.setCollider("rectangle",-20,-10,60,20);
    tri_red.addImage(tri_red_img);
    tri_red.debug=true;
    tri_red_rt=createSprite(721,510,10,10);
    tri_red_rt.setCollider("rectangle",-10,10,20,60);
    tri_red_rt.addImage(tri_red_turn_img);
    tri_red_rt.debug=true;
    tri_red_lt=createSprite(293,580,10,10);
    tri_red_lt.setCollider("rectangle",-10,-10,60,20);
    tri_red_lt.addImage(tri_red_img);
    tri_red_lt.debug=true;
    tri_orange=createSprite(350,196,10,10);
    tri_orange.setCollider("rectangle",-50,10,35,60);
    tri_orange.debug=true;
    tri_orange.addImage(tri_orange_img)
    
    paddle_lt=createSprite(470,660,10,10);
    paddle_lt.setCollider("rectangle",0,0,160,50);
    paddle_lt.addAnimation("paddle_still_lt",paddle_lt_img);
    paddle_lt.addAnimation("paddle_moving_lt",paddle_moving_lt)
    paddle_lt.debug=true;
    paddle_lt.scale=0.5;
    paddle_rt=createSprite(490,600,10,10);
    paddle_rt.setCollider("rectangle",150,120,160,50);
    paddle_rt.scale=0.5;
    paddle_rt.debug=true;
    paddle_rt.addAnimation("paddle_still_rt",paddle_rt_img);
    
    star_bl=createSprite(225,410,10,10);
    star_bl.setCollider("circle",220,-170,25);
    star_bl.addImage(star_bl_img);
    star_bl.debug=true;
    star_rd=createSprite(400,550,10,10);
    star_rd.setCollider("circle",160,-170,25);
    star_rd.debug=true;
    star_rd.addImage(star_rd_img);
    
    
    wall1=createSprite(200,400,10,600);
    wall2=createSprite(800,400,10,600);
    wall3=createSprite(320,700,240,10);
    wall4=createSprite(680,700,240,10);
    wall5=createSprite(250,100,100,10);
    wall6=createSprite(500,100,100,10);
    wall7=createSprite(750,100,100,10);
}

function draw(){
    background(back_img);
    x=mouseX;
    y=mouseY;
    fill("white");
    text(x,50,50);

    fill("white");
    text(y,80,50);

    fill("white");
    textSize(45);
    textFont("Monaco");
    text("PIN-BALL-GAME",340,65);

    fill("white");
    textSize(20);
    textFont("Monaco");
    text("SCORE:"+score,215,135);

    ball.bounceOff(wall1);
    ball.bounceOff(wall2);
    ball.bounceOff(wall3);
    ball.bounceOff(wall4);
    ball.bounceOff(wall5);
    ball.bounceOff(wall6);
    ball.bounceOff(wall7);
    ball.bounceOff(tri_red);
    ball.bounceOff(tri_red_rt);
    ball.bounceOff(tri_red_lt);
    ball.bounceOff(tri_orange);
    ball.bounceOff(tri_blue);
    ball.bounceOff(paddle_rt);
    ball.bounceOff(paddle_lt);
    ball.bounceOff(basket1);
    ball.bounceOff(basket2);
    ball.bounceOff(star_bl);
    ball.bounceOff(star_rd);

    if(keyDown(32)){
        ball.visible=true;
        ball.velocityY=4;
        ball.velocityX=-2;
    }


    if(ball.isTouching(basket1)){
        score=score+1;
    }

    if(ball.isTouching(basket2)){
        score=score+1;
    }

    if(ball.isTouching(star_rd)){
        score=score+1;
    }

    if(ball.isTouching(star_bl)){
        score=score+1;
    }

    drawSprites();
    if(leftClicked === false){
      //  paddle_lt.addAnimation("paddle_still_lt",paddle_lt_img);
        paddle_lt.changeAnimation("paddle_still_lt");
    }
    
}


function keyPressed(){
    if(keyCode==LEFT_ARROW){
        leftClicked = true
        if(leftClicked===true){
           // paddle_lt.addAnimation("paddle_moving_lt",paddle_moving_lt)
            paddle_lt.changeAnimation("paddle_moving_lt");
           
           
        }
        leftClicked = false
    }
/*
    for(var i=0; i<=13000; i++){
        leftClicked = false
        console.log(i)
        if(i===130){
             console.log("i is 30")
            //leftClicked = false
            
        }
    } */
}
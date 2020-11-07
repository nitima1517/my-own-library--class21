function isTouching(p1,p2){
    if(p1.x-p2.x<p2.width/2+p1.width/2 &&
       p2.x - p1.x<p2.width/2+p1.width/2&&
        p1.y-p2.y<p2.height/2+p1.height/2&&
        p2.y-p1.y<p2.height/2+p1.height/2){
       return true;
  }
  else{
    return false;
  }
  }

  function bounceOff(o1,o2){
    if(o1.x-o2.x<o2.width/2+o1.width/2 &&
        o2.x - o1.x<o2.width/2+o1.width/2){
    
          o2.velocityX = -1*o2.velocityX;
          o1.velocityX = -1*o1.velocityX;
        } 
       
        if(o1.y-o2.y<o2.height/2+o1.height/2 &&
            o2.y - o1.y<o2.height/2+o1.height/2){
        
              o2.velocityY = -1*o2.velocityY;
              o1.velocityY = -1*o1.velocityY;
            } 

  }
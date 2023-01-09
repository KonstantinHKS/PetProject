  let colors = ['red','yellow','cyan','magenta','orange','blue','pink'];
  let Circle = [];
  const ballCount = 20;
  let timer;
  let isTimerStarted = null;


  for (let i = 0; i < ballCount; i++){
  Circle[i] = {};
 
  let rnd = getRandomSize();
  let coord = getCoor(rnd);
  Circle[i].ball = createBall(coord, rnd);
  Circle[i].directiony = getDirection();
  Circle[i].directionx = getDirection();
  Circle[i].x = coord.x;
  Circle[i].y = coord.y;
  Circle[i].speed = getSpeed()*2;
  Circle[i].size = rnd;
  

}

  let buttonStart = createButton('start',0,100);
  let buttonStop = createButton('stop',100, 0);
  buttonStop.onclick = stopClick;
  buttonStart.onclick = startClick;
  

  function startClick(){
   if(isTimerStarted){
    return
  };
    timer = setInterval(moving, 3);
    isTimerStarted = true;
  }

  function stopClick(){
    clearInterval(timer);
    isTimerStarted = false;

  }
 
  function createButton(text,x,y){
    let button = document.createElement("button");
    document.body.appendChild(button);
    button.style.width = '80px';
    button.style.height = '80px';
    button.style.position = 'absolute';
    button.style.border = '2px solid black';
    button.style.left = x + 'px';
    button.style.top = y + 'px'; 
    button.innerText = text;
    
    document.body.append(button);
  
    return button;
  }

  function getRandomSize(){
    
    return Math.floor(Math.random()* 50 + 50);  
  }

  function createBall(aCoord, rnd){
  let ball = document.createElement("div");
  document.body.appendChild(ball);
  ball.classList.add("Circles");
  ball.id = 'idCircle';
  ball.style.borderRadius = '50%' ;
  ball.style.position = 'absolute';
  ball.style.border = '2px solid black';
  ball.style.overflow = 'hidden';

  ball.style.left = aCoord.x + 'px';
  ball.style.top = aCoord.y +'px';

  ball.style.width = rnd + 'px';
  ball.style.height = rnd + 'px';

  
  let numColor = Math.floor(Math.random() * colors.length);
  ball.style.background = colors[numColor];

  document.body.append(ball);

  return ball;
  }

  function getDirection(){
    if((Math.random() - 0.5) > 0){
      return 1;
    }
    else{
      return -1;
    }
  }

  function getSpeed()
  {
  return Math.random();
  };
  

  function getCoor(rnd)
  {
  let coor = {};
  coor.x = Math.floor(Math.random() * (document.documentElement.clientWidth - rnd - 10));
  coor.y = Math.floor(Math.random() * (document.documentElement.clientHeight - rnd - 10));
  return coor;
  }


  
  function moving(){
  for(let i = 0; i < Circle.length; i++){
  Circle[i].y+= Circle[i].directiony * Circle[i].speed;
  Circle[i].x+= Circle[i].directionx * Circle[i].speed;
  if( Circle[i].y > (document.documentElement.clientHeight - Circle[i].size - 10))
  {
    Circle[i].directiony = -1;
    Circle[i].y = (document.documentElement.clientHeight - Circle[i].size - 10);

  }
  else if (Circle[i].y < 0)
  {
    Circle[i].directiony = 1;
    Circle[i].y = 0;
  }

  if(Circle[i].x > (document.documentElement.clientWidth - Circle[i].size - 3))
    {
    Circle[i].directionx = -1; 
    Circle[i].x = document.documentElement.clientWidth - Circle[i].size - 3;
    } 
    else if (Circle[i].x < 0 )
    {
    Circle[i].directionx = 1;
    Circle[i].x = 0;
   
    }

  Circle[i].ball.style.left = Circle[i].x + 'px';
  Circle[i].ball.style.top = Circle[i].y + 'px';
  }
  }
  



      
          

      
      

// let Circles = document.getElementsByClassName('mainDiv');
// let Circle = document.createElement('div');
// Circles.appendChild(Circle); 

// function createCircles(newCircle)
// {
//     // let div = document.createElement("div");
//     // div.classList.add("Circle");

//     // return div;

//     for(let i = 0; i < 50; i++){

//         let newCircle = document.createElement('div');
//         newCircle.innerHTML = i;}
//         newCircle.classList.add('Circle');
//         document.body.append(newCircle);
//         return newCircle;
//     }
// createCircles();
 
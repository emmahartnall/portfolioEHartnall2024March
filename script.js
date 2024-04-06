var mouseCircle = document.getElementById("mCircleId");
var mouseDot = document.getElementById("mDotId");

document.addEventListener("DomContentLoaded", function() {
  console.log("DOM fully loaded and parsed");
});

const   mouseCircleFn = (x, y) => {
  //console.log("inside mouseCircleFn");
  //console.log(`X: ${x}, Y: ${y}`);

  try{
        mouseCircle.style.top = `${y}px`;
        mouseCircle.style.left = `${x}px`;
        mouseDot.style.top = `${y}px`;
        mouseDot.style.left = `${x}px`;
    }
    catch(err) {
        console.log(err);
    }
}

document.body.addEventListener('mousemove', (e) => {
  let x = e.clientX;
  let y = e.clientY;

  if (!mouseCircle) {
    console.error("Element with ID 'mCircleId' not found!");
    return;
  }
    if (!mouseDot) {
    console.error("Element with ID 'mDotId' not found!");
    return;
  }

  if (typeof x !== "number" || typeof y !== "number") {
    console.error("Invalid parameters passed to mouseCircleFn!");
    return;
  }

  mouseCircleFn(x,y);
});

document.body.addEventListener('mouseleave',
() => {
  mouseCircle.style.opacity = `0`;
  mouseDot.style.opacity = `0`;}); 

document.body.addEventListener('mouseenter',
() => {
  mouseCircle.style.opacity = `1`;
  mouseDot.style.opacity = `1`;});

const circles = document.querySelectorAll('.circle');
const mainImg = document.querySelector('.main-circle img');

let mX = 0;
let mY = 0;

const animateCircles = (e,x,y) => {

  if(x < mX){
    console.log("mouse moved to the left");
    circles.forEach((circle) => {
      console.log("circle moved to the left");
      circle.style.left = '100px';
    })
  }
  else if(x > mX){
    console.log("mouse moved to the right");
    circles.forEach((circle) => {
      circle.style.left = '-100px';
      console.log("circle moved to the right");
    })
  }
  if(y < mY){
   // console.log("moved up");
  }
  else if(y > mY){
   // console.log("moved down");
  }
  else if(x == mX){
   // console.log("no movement");
  }
  else if(y == mY){
   // console.log("no movement");
  }

  mX = e.clientX;
  mY = e.clientY;
}

document.body.addEventListener("mousemove",(e) => {
  let x = e.clientX;
  let y = e.clientY;

  mouseCircleFn(x,y);
  animateCircles(e,x,y);
});

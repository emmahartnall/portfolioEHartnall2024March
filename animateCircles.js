const animateCircles = (e, x, y) => {

  if (x < mX) {
    console.log("mouse moved to the left");
    circles.forEach((circle) => {
      console.log("circle moved to the left");
      circle.style.left = '100px';
    });
  }
  else if (x > mX) {
    console.log("mouse moved to the right");
    circles.forEach((circle) => {
      circle.style.left = '-100px';
      console.log("circle moved to the right");
    });
  }
  if (y < mY) {
    // console.log("moved up");
  }
  else if (y > mY) {
    // console.log("moved down");
  }
  else if (x == mX) {
    // console.log("no movement");
  }
  else if (y == mY) {
    // console.log("no movement");
  }

  mX = e.clientX;
  mY = e.clientY;
};

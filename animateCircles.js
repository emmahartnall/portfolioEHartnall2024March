const animateCircles = (e, x, y) => {

  if (x < mX) {
    console.log("mouse moved to the left");
    circles.forEach((circle) => {
      console.log("circle moved to the left");
      circle.style.left = '100px';
    });
    //mainImg.style.left = '100px';
    //maincircle.style.left = '100px';
  }
  else if (x > mX) {
    console.log("mouse moved to the right");
    circles.forEach((circle) => {
      circle.style.left = '-100px';
      console.log("circle moved to the right");
    });
    //mainImg.style.left = '-100px';
    //maincircle.style.left = '-100px';
  }
  if (y < mY) {
    // console.log("moved up");
    circles.forEach((circle) => {
      console.log("circle moved up");
      circle.style.top = '100px';
    });
    //mainImg.style.top = '100px';
    //maincircle.style.top = '100px';
  }
  else if (y > mY) {
    // console.log("moved down");
    circles.forEach((circle) => {
      console.log("circle moved down");
      circle.style.top = '-100px';
    });
    //mainImg.style.top = '-100px';
    //maincircle.style.top = '-100px';
  }

  mX = e.clientX;
  mY = e.clientY;
};

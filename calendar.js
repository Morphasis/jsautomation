// Move the mouse across the screen as a sine wave.
var robot = require("robotjs");

// Speed up the mouse.
// robot.setMouseDelay(0.2);

// x:721 y:162
var mouse_default_x = 720;
var mouse_default_y = 162;

robot.moveMouse(mouse_default_x, mouse_default_y);

// offset defaults
var counter_x = 0;
var counter_y = 0;

for (var c=1;c<8;c++)
{
  for (var i=1;i<11;i++)
  {
    robot.mouseClick();
    robot.moveMouse(mouse_default_x+counter_y, mouse_default_y+counter_x)
    counter_x = counter_x+25
  }
  counter_x = 0
  robot.moveMouse(mouse_default_x+counter_y, mouse_default_y+counter_x)
  counter_y = counter_y+127
  console.log(counter_y)
}

var mouse = robot.getMousePos();
console.log("Mouse is at x:" + mouse.x + " y:" + mouse.y);

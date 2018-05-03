/**
This is a very simple, yet powerful animation object
Usage:
//initialization
animation.fps = 60; //set fps optional
animation.renderFunction = myRepeatingFunction; // set the function which is called every fps

//controls
animation.start(); //start the animation

animation.stop(); //stop the animation
*/

window.animation = {};
animation.id = null;
animation.fps = 30;
animation.framecount = 0;
animation.millisecondsperframe = 1000 / animation.fps;
animation.timestampms = Date.now();
animation.timestampms2 = Date.now();
animation.msdifference = 0;
animation.renderFunction = null;
var repeatOften = function() {
  animation.timestampms2 = Date.now();
  animation.msdifference = animation.timestampms2 - animation.timestampms;
  if(animation.msdifference > animation.millisecondsperframe){
    animation.framecount++;
    animation.frame();
    animation.timestampms = animation.timestampms2 - (animation.msdifference % animation.millisecondsperframe);
  }
  animation.id = requestAnimationFrame(repeatOften);
}

animation.frame = function(){
    animation.renderFunction();
}

animation.stop = function() {
  cancelAnimationFrame(animation.id);
}
animation.start = function(){
    animation.id = requestAnimationFrame(repeatOften);
}

console.log(window.animation);

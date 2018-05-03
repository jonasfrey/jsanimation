# jsanimation
A simple Javascript Animation

This is a very simple, yet powerful animation object

# Usage:

Set fps (optional)
```
animation.fps = 60; //default = 30 
```
Set Render function 
```
animation.renderFunction = myRepeatingFunction; // set the function which is called every frame
```
Start the animation

```
animation.start(); //start the animation
```

Stop the animation
```
animation.stop(); //stop the animation
```

# Usefull data 

Each frame will be counted you can access the framecount number like this
```
animation.framecount;
```
If you want to change some values in each and every frame you can overwrite the frame function like this 
```
animation.frame = function(){
    animation.renderFunction();
    animation.changeValues();
}

animation.changeValues = function(){

  somevalue++;

}
```

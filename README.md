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
The animation.frame function is executed every frame
If you want to overwrite it , maybe for changing some values according to the animation you can do it like so 
```
animation.frame = function(){

    animation.renderFunction();

    changeValues();  //<-- your custom functions 
}
```


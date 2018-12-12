// create an image for snow
const snow = new Image();
snow.src = 'snow.png';
snow.onload = function() {
    // start off animation with single frame request once rain isloaded
    window.requestAnimationFrame(loopAnimation, canvas);
}

// prev code omitted
// next function allows us to cover all browsers by aliasing the different browser-specific versions of the function to a single function
window.requestAnimationFrame = function() {
    return window.requestAnimationFrame
}
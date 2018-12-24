import {
    drawTrees
} from '../drawTrees/drawTrees'

// canvas dimensions for snow functions
const canvas = document.getElementById('canvas');
const centext = canvas.getContext('2d');
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;
// snowflake particles for snow functions
const mp = 2000;
let particles = [];
for (let i = 0; i < mp; i++) {
    particles.push({
        x: Math.random() + width,
        y: Math.random() * height,
        r: Math.random() * 4 + 1,
        d: Math.random() * mp
    })
}

// this function allows us to cover all browsers
// by aliasing the different browser-specific
// versions of the function to a single function
window.requestAnimFrame = (function() {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        // fall back to the old setTimeout technique if nothing
        // else is available
        function( /* function */ callback, /* DOMElement */ element) {
            window.setTimeout(callback, 1000 / 60);
        };;
})();

// This function is where we update the content of our canvas
export function drawAFrame() {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    // do some drawing on the canvas, using the elapsedTime
    // as a guide for changes.
    context.globalAlpha = 0.1;
    context.globalCompositeOperation = 'darker';
    context.save();
    // draw the existing trees picture first
    drawTrees();

    // Darken the canvas for an eerie sky.
    // By only darkening most of the time, we create lightning flashes
    if (Math.random() > 0.01) {
        context.globalAlpha = 0.5;
        context.fillStyle = '#000';
        context.fillRect(0, 0, 900, 500);
        context.globalAlpha = 1.0;
    }
    context.fillStyle = 'rgba(255, 255, 255, 0.8)';
    context.beginPath();
    for (let i = 0; i < mp; i++) {
        let p = particles[i];
        context.moveTo(p.x, p.y);
        context.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
    }
    context.fill();
    update();
    context.restore();
}
let angle = 0;
/* function to move the snowflakes
angle will be an ongoing incremental flag. sin and cos functions will be applied to it to create vertical and horizontal movements of the flakes. */
function update() {
    angle += 0.01;
    for (let i = 0; i < mp; i++) {
        let p = particles[i];
        // updating x and y coords
        /* we will add 1 to the cos function to prevent negative values which will lead flakes to move upwards.  Every particle has its own density which can be used to make the downward movement different for each flake.*/
        // More random by adding in radius
        p.y += Math.cos(angle + p.d) + 1 + p.r / 2;
        p.x += Math.sin(angle) * 0.01;
        /* Sending flakes back from the top when it exits. Let's  make it a bit more organic and let flakes enter from the left and right also. */
        if (p.x > width + 5 || p.x < -50 || p.y > height) {
            if (i % 3 > 0) {
                particles[i] = {
                    x: Math.random() * width,
                    y: -50,
                    r: p.r,
                    d: p.d
                }
            } else {
                // if the flake is exiting from right
                if (Math.sin(angle) > 0) {
                    // enter from left
                    particles[i] = {
                        x: -25,
                        y: Math.random() * height,
                        r: p.r,
                        d: p.d
                    }
                } else {
                    // enter from right
                    particles[i] = {
                        x: width + 25,
                        y: Math.random() * height,
                        r: p.r,
                        d: p.d
                    }
                }
            }
        }
    }
}



// This function will be called whenever the browser is ready
// for our application to render another frame.
export function loopAnimation(currentTime) {
    // Draw a single frame of animation on our canvas
    setInterval(drawAFrame(), 33);

    // After this frame is drawn, let the browser schedule the next one
    window.requestAnimFrame(loopAnimation, canvas);
}
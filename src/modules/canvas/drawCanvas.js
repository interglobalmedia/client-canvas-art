import styles from './drawCanvas.scss';
// import canvas art text
import {
    displayText
} from '../displayText/displayText';
// draw tree canopy path
import {
    drawTrees
} from '../drawTrees/drawTrees';

import {
    curvyPath
} from '../curvyPath/curvyPath';

export function resizeCanvas() {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    if (canvas.width != width || canvas.height != height) {
        canvas.width = width;
        canvas.height = height;
        return true;
    }
    return false;
}

let needToRender = true;

export function checkRender() {
    if (resizeCanvas() || needToRender) {
        needToRender = false;
        drawCanvas();
    }
    requestAnimationFrame(checkRender);
}
checkRender();

export function drawCanvas() {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    context.lineWidth = 0;
    context.fillStyle = 'rgba(255, 251, 214, 1)';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.strokeRect(-5, 0, canvas.width, canvas.height);
    canvas.innerHTML = `<canvas id="canvas" class="${styles.canvas}">< /canvas>`;
    displayText();
    curvyPath();
    drawTrees();


}
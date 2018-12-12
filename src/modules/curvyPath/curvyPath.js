import {
    drawTree
} from '../drawTree/drawTree';

const gravel = new Image();
gravel.src = 'images/gravel.jpg';
gravel.onload = function() {
    drawTree();
}

export function curvyPath() {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    context.save();
    context.translate(-10, 350);
    context.beginPath();

    // first curve bends up and right
    context.moveTo(0, 0);
    context.translate(550, -100);
    context.quadraticCurveTo(150, 0, 250, -180);

    // second curve continues down and right
    context.quadraticCurveTo(300, -275, 400, -270);

    // draw path in a wide brown stroke
    context.strokeStyle = context.createPattern(gravel, 'repeat');
    context.lineWidth = 30;
    context.stroke();
    context.shadowColor = 'rgba(94, 62, 0, 1)';
    context.shadowBlur = 5;
    context.shadowOffsetX = 2;
    context.shadowOffsetY = 3;
    context.stroke();

    // restore the previous canvas state
    context.restore();
}
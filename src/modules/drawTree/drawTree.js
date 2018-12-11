import {
    createCanopyPath
} from '../treeCanopy/treeCanopyPath';

const gravel = new Image();
gravel.src = '/images/gravel.jpg';
gravel.onload = function() {
    drawTree();
}

const bark = new Image();
bark.src = '/images/bark.jpg';
bark.onload = function() {
    drawTree();
}

export function drawTree(context) {
    const canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');
    // create a 3 step gradient horizontally across trunk
    const trunkGradient = context.createLinearGradient(-5, -50, 5, -50);

    // beginning of the trunk is medum brown
    trunkGradient.addColorStop(0, '#663300');

    // middle-left of trunk is lighter in color
    trunkGradient.addColorStop(0.4, '#996600');

    // right edge of the trunk is darkest
    trunkGradient.addColorStop(1, '#552200');

    // apply gradient as fill style and draw trunk
    context.fillStyle = trunkGradient;
    context.fillRect(-5, -50, 10, 50);

    // second vertical gradient creates a shadow from the canopy on the trunk
    const canopyShadow = context.createLinearGradient(0, -50, 0, 0);

    // beginning of shadow gradient is black, but with a 50% a;pha value
    canopyShadow.addColorStop(0, 'rgba(0, 0, 0, 0.5)');

    // slightly further down, gradient completely fades to fully transparent. Rest of trunk gets no shadow.

    canopyShadow.addColorStop(0, 'rgba(0, 0, 0, 0)');

    // draw shadow gradient on top of tree trunk gradient
    context.fillStyle = canopyShadow;
    context.fillRect(-5, -50, 10, 50);

    // create shape for canopy path
    createCanopyPath(context);
    context.lineWidth = 4;

    // round corners at path joints
    context.lineJoin = 'round';

    // stroke the current path
    context.strokeStyle = context.createPattern(bark, 'repeat');
    context.stroke();
    context.fillStyle = 'rgba(31,64,10,1)';
    context.fill();
}
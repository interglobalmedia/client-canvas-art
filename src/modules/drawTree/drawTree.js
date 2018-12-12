import {
    createCanopyPath
} from '../treeCanopy/treeCanopyPath';

const gravel = new Image();
gravel.src = 'images/gravel.jpg';
gravel.onload = function() {
    drawTree();
}

const bark = new Image();
bark.src = 'images/bark.jpg';
bark.onload = function() {
    drawTree();
}

export function drawTree(context) {
    const canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');
    // create 3 stop gradient horizontally across trunk
    context.save();
    /* create slanted tree as the shwdow by applying a shear transform, changing x values to increase as Y values increase
    with this transform applied, all coords are multiplied b the matrix
    */
    context.transform(1, 0, -0.5, 1, 0, 0);
    // shrink the shadow down to 60% height in the Y dimension
    context.scale(1, 0.6);

    // set tree fill to be black, but at only 20% alpha
    context.fillStyle = 'rgba(0, 0, 0, 0.2)';
    context.fillRect(-5, -50, 10, 50);

    // redraw the tree with the shadow effects applied
    createCanopyPath(context);
    context.fill();

    // restore the canvas state
    context.restore();

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
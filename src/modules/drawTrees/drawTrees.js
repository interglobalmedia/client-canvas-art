import {
    drawTree
} from '../drawTree/drawTree';

export function drawTrees() {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    // draw first tree
    context.save();
    context.translate(325, 250);
    context.scale(1.2, 1.2)
    drawTree(context);
    context.restore();

    // draw second tree
    context.save();
    context.translate(750, 475);

    context.scale(2, 2);
    drawTree(context);
    context.restore();

    // draw third tree
    context.save();
    context.translate(140, 290);
    context.scale(1.5, 1.5);
    drawTree(context);
    context.restore();

    // draw fourth tree
    context.save();
    context.translate(475, 200);
    drawTree(context);
    context.restore();

    // draw a fifth tree
    context.save();
    context.translate(825, 250);
    context.scale(1.3, 1.3);
    drawTree(context);
    context.restore();

    // draw a sixth tree
    context.save();
    context.translate(575, 420);
    context.scale(1.7, 1.7);
    drawTree(context);
    context.restore();

    // draw seventh tree
    context.save();
    context.translate(425, 375);
    context.scale(1.3, 1.3);
    drawTree(context);
    context.restore();

    // draw eight tree
    context.save();
    context.translate(300, 490);
    context.scale(1.6, 1.6);
    drawTree(context);
    context.restore();

    // draw ninth tree
    context.save();
    context.translate(225, 200);
    context.scale(1.1, 1.1);
    drawTree(context);
    context.restore();

    // draw tenth tree
    context.save();
    context.translate(70, 420);
    context.scale(1.25, 1.25);
    drawTree(context);
    context.restore();

    // draw eleventh tree
    context.save();
    context.translate(680, 240);
    context.scale(1.2, 1.2);
    drawTree(context);
    context.restore();

    // draw twelve tree
    context.save();
    context.translate(50, 180);
    drawTree(context);
    context.restore();

    // draw thirteenth three
    context.save();
    context.translate(610, 170);
    drawTree(context);
    context.restore();

    // draw fourteenth tree
    context.save();
    context.translate(730, 100);
    context.scale(0.65, 0.65);
    drawTree(context);
    context.restore();

    // draw fifteenth tree
    context.save();
    context.translate(400, 150);
    context.scale(0.8, 0.8);
    drawTree(context);
    context.restore();

    // draw sisteenth tree
    context.save();
    context.translate(535, 145);
    context.scale(0.75, 0.75);
    drawTree(context);
    context.restore();

    // draw seventeenth tree
    context.save();
    context.translate(200, 400);
    context.scale(1.3, 1.3);
    drawTree(context);
    context.restore();
}

window.addEventListener('load', drawTree, true);
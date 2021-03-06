export function createCanopyPath(context) {
    context.beginPath();
    context.moveTo(-25, -50);
    context.lineTo(-10, -80);
    context.lineTo(-20, -80);
    context.lineTo(-5, -110);
    context.lineTo(-15, -110);

    // top of the tree
    context.lineTo(0, -140);

    context.lineTo(15, -110);
    context.lineTo(5, -110);
    context.lineTo(20, -80);
    context.lineTo(10, -80);
    context.lineTo(25, -50);

    // close the path back to its start point
    context.closePath();
}
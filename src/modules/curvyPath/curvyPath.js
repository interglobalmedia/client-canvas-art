export function curvyPath() {
    const canvas = document.getElementById('canvas')
    const context = canvas.getContext('2d')
    context.save()
    context.translate(-10, 350)
    context.beginPath()

    // first curve bends up and right
    context.moveTo(0, 0)
    context.translate(700, -100)
    context.quadraticCurveTo(150, -5, 250, -180)

    // second curve continues down and right
    context.quadraticCurveTo(300, -275, 400, -270)

    // draw path in a wide brown stroke
    context.strokeStyle = 'rgba(99,66,23, 1)'
    context.lineWidth = 20
    context.stroke()

    // restore the previous canvas state
    context.restore()
}
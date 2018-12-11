import {
    createCanopyPath
} from '../treeCanopy/treeCanopyPath';

const bark = new Image()
bark.src = '/images/bark.jpg'
bark.onload = function() {
    drawTree()
}

export function drawTree() {
    const canvas = document.getElementById('canvas')
    const context = canvas.getContext('2d')
    context.save()
    context.translate(130, 300)
        // create shape for canopy path
    createCanopyPath(context)
    context.lineWidth = 4

    // round corners at path joints
    context.lineJoin = 'round'

    // stroke the current path
    context.strokeStyle = 'rgba(99,37,14,1)'
    context.stroke()
    context.fillStyle = 'rgba(31,64,10,1)'
    context.fill()
    context.fillStyle = 'rgba(99,37,14,1)'
    context.fillRect(-5, -50, 10, 50)
    context.drawImage(bark, -5, -50, 10, 50)
    context.restore()
}

window.addEventListener('load', drawTree, true);
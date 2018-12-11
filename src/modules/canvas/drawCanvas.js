import styles from './drawCanvas.scss'

// draw tree canopy path
import {
    drawTree
} from '../drawTree/drawTree'

import {
    curvyPath
} from '../curvyPath/curvyPath'

export function resizeCanvas() {
    const canvas = document.getElementById('canvas')
    const context = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    const width = canvas.clientWidth
    const height = canvas.clientHeight

    if (canvas.width != width || canvas.height != height) {
        canvas.width = width;
        canvas.height = height;
        return true
    }
    return false
}

let needToRender = true

export function checkRender() {
    if (resizeCanvas() || needToRender) {
        needToRender = false;
        drawCanvas()
    }
    requestAnimationFrame(checkRender)
}
checkRender();

export function drawCanvas() {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d')
    const width = window.innerWidth
    const height = window.innerHeight
    canvas.width = width
    canvas.weight = height
    context.lineWidth = 0
    context.strokeStyle = 'rgba(200,61,50, 1)'
    context.fillStyle = 'rgba(255, 251, 214, 1)'
    context.fillRect(0, 0, canvas.width, canvas.height)
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.strokeRect(-5, 0, canvas.width, canvas.height);
    canvas.innerHTML = `<canvas id="canvas" class="${styles.canvas}">< /canvas>`
    drawTree()
    curvyPath()
}
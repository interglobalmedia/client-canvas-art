import styles from './resizeCanvas.scss'

export function resizeCanvas() {
    const canvas = document.getElementById('canvas')
    const context = canvas.getContext('2d')
    canvas.width = canvas.clientWidth
    canvas.height = canvas.clientHeight
    const width = canvas.width
    const height = canvas.height

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
        // const width = window.innerWidth
        // const height = window.innerHeight
    canvas.width = canvas.clientWidth
    canvas.height = canvas.clientHeight
    context.lineWidth = 100
    context.strokeStyle = 'rgba(200,61,50, 1)'
    context.fillStyle = 'rgba(255, 251, 214, 1)'
    context.fillRect(0, 0, canvas.width, canvas.height)
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.strokeRect(0, 0, canvas.width, canvas.height);
    canvas.innerHTML = `<canvas id="canvas" class="${styles.canvas}">< /canvas>`
}
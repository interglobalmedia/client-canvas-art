import {
    drawSnow
} from '../snow/snow';
import styles from './drawSnowCanvas.scss';

export function drawSnowCanvas() {
    const canvas = document.getElementById('snow');
    const context = canvas.getContext('2d');
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    context.lineWidth = 0;
    context.fillStyle = 'transparent';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.strokeRect(-5, 0, canvas.width, canvas.height);
    canvas.innerHTML = '<canvas id="snow" class="`${styles.snow}`">< /canvas>';
    window.addEventListener('load', () => {
        setInterval(drawSnow, 33);
    });
}
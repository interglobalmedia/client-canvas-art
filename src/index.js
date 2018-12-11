// check for canvas support
try {
    document.createElement('canvas').getContext('2d')
    document.getElementById('support').innerHTML =
        'HTML5 Canvas is supported in your browser'
} catch (e) {
    document.getElementById('support').innerHTML = 'HTML5 Canvas is not supported in your browser'
}

// drawCanvas
import {
    drawCanvas
}
from './modules/canvas/drawCanvas'
drawCanvas();

import './styles/styles.scss'
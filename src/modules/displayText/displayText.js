const WebFont = require('webfontloader');
WebFont.load({
    google: {
        families: ['Gochi Hand', 'Gochi Hand Cursive', 'Muli', 'Muli Sans Serif'],
        urls: ['https://fonts.googleapis.com/css?family=Gochi+Hand', 'https://fonts.googleapis.com/css?family=Muli']
    },
    active: function() {
        displayText();
    }
});

export function displayText() {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    context.save();
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    context.font = '130% Gochi Hand';
    context.fillStyle = 'rgba(43, 89, 90, 1)'
    context.fillText('Canvas Art', canvas.width / 2 - 45, canvas.height / 12 - 15);
    context.font = '100% Muli';
    context.fillStyle = 'rgba(130, 161, 143, 1)'
    context.fillText('© 2018 Maria D. Campbell', canvas.width / 2.5 - 8, canvas.height - 15)
}
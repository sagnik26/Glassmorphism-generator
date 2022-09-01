let slider_red = document.getElementById('myRange-red');
let slider_green = document.getElementById('myRange-green');
let slider_blue = document.getElementById('myRange-blue');
let slider_opacity = document.getElementById('myRange-opacity');
let slider_blur = document.getElementById('myRange-blur');

let display = document.getElementById('disp');
let card = document.getElementById('card-disp');

let r = 0, g = 0, b = 0, opacity = 0;

slider_red.addEventListener('input', (event) => {
    r = slider_red.value;
    // console.log('red', Number(r));
    if(!r)
        r = 0;
    display.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
})

slider_green.addEventListener('input', (event) => {
    g = slider_green.value;
    // console.log('green', Number(g));
    if(!g)
        g = 0;
    display.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
})

slider_blue.addEventListener('input', (event) => {
    b = slider_blue.value;
    // console.log('blue', Number(b));
    if(!b)
        b = 0;
    display.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
})

slider_opacity.addEventListener('input', (event) => {
    opacity = slider_opacity.value;
    // console.log(opacity);
    if(!opacity)
        opacity = 0;
    card.style.opacity = opacity;
})
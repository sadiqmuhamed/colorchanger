const css = document.querySelector('h3');
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const body = document.getElementById('gradient');
const randomBtn = document.querySelector('.randomBtn');

function setGradient() {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;

  css.textContent = `${body.style.background};`;
}

function setRandColor() {
  color1.value = `#${((Math.random() * 0xffffff) << 0).toString(16)}`; // eslint-disable-line no-bitwise
  color2.value = `#${((Math.random() * 0xffffff) << 0).toString(16)}`; // eslint-disable-line no-bitwise
  setGradient();
}

color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);

randomBtn.addEventListener('click', setRandColor);

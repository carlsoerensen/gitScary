const info = document.querySelector('h2');
const spanElement = document.createElement('span');
spanElement.textContent = ' - New Content hhaha ADAM';
info.appendChild(spanElement);


const colors = ['red', 'green', 'blue', 'orange', 'purple'];
let currentColorIndex = 0;

info.addEventListener('click', changeColor);

function changeColor() {
  info.style.color = colors[currentColorIndex];
  currentColorIndex = (currentColorIndex + 1) % colors.length;
}
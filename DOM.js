const info = document.querySelector('h2');
const spanElement = document.createElement('span');
spanElement.textContent = ' - New Content hhaha ADAM';
info.appendChild(spanElement);


const colors = ['red', 'green', 'blue', 'orange', 'purple'];
let currentColorIndex = 0;
let fontSize = 16;

info.addEventListener('click', changeAppearance);

function changeAppearance() {
  info.style.color = colors[currentColorIndex];
  currentColorIndex = (currentColorIndex + 1) % colors.length;

  fontSize += 2;
  info.style.fontSize = `${fontSize}px`;
}
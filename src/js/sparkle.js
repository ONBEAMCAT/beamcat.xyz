const sparklesContainer = document.getElementById('sparkles-container');
let counter = 1;
document.addEventListener('mousemove', e => {
  counter++;
  if (counter % 2 === 0) return;
  createSparkle(e.pageX, e.pageY);
});

function createSparkle(x, y) {
  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle';
  sparkle.style.left = x + 'px';
  sparkle.style.top = y + 'px';
  sparkle.style.color = getRandomRainbowColor();
  sparkle.innerHTML = '+';
  sparklesContainer.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 2500);
}

function getRandomRainbowColor() {
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, 100%, 50%)`;
}

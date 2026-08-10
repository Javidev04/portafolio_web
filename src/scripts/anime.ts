import { animate, scrambleText } from 'animejs';

const texts = ['Jamir Castilla', 'desarrollador web', 'programador de videojuegos', 'estudiante de Ingeniería de Sistemas'];
let animationInterval: number | undefined;
let currentIndex = 0;

function getTargetElement() {
  return document.getElementById('hero-name');
}

function playTextAnimation() {
  const target = getTargetElement();
  if (!target) return;

  currentIndex = (currentIndex + 1) % texts.length;
  animate(target, {
    innerHTML: scrambleText({ text: texts[currentIndex] }),
  });
}

function initTextAnimation() {
  const target = getTargetElement();
  if (!target) return;

  if (animationInterval) {
    window.clearInterval(animationInterval);
  }

  currentIndex = 0;
  target.innerHTML = texts[0];
  playTextAnimation();
  animationInterval = window.setInterval(playTextAnimation, 2000);
}

function stopTextAnimation() {
  if (animationInterval) {
    window.clearInterval(animationInterval);
    animationInterval = undefined;
  }
}

document.addEventListener('DOMContentLoaded', initTextAnimation);
document.addEventListener('astro:after-swap', initTextAnimation);
document.addEventListener('astro:before-preparation', stopTextAnimation);
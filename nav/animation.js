document.addEventListener('DOMContentLoaded', (event) => {
  fadeIn(document.querySelector('.background'), 0, 1, 1);
  fadeIn(document.querySelector('.profile-picture'), 0, 1, 1.2);
  fadeIn(document.querySelector('.name'), 0, 1, 1);
  fadeIn(document.querySelector('.line'), 0, 1, 1);
  fadeIn(document.querySelector('nav'), 0, 1, 1);
  fadeIn(document.querySelector('.info-box'), 0, 1, 1);
});

function fadeIn(element, initial, final, duration) {
  let opacity = initial;
  element.style.opacity = opacity;

  const interval = 10;
  const step = (final - initial) / (duration * 1000 / interval);

  const fading = setInterval(() => {
    opacity += step;
    if (opacity >= final) {
      clearInterval(fading);
      element.style.opacity = final;
    } else {
      element.style.opacity = opacity;
    }
  }, interval);
}

const profilePicture = document.querySelector('.profile-picture');
profilePicture.addEventListener('mouseover', () => hoverEffect(profilePicture, 1.1));
profilePicture.addEventListener('mouseout', () => hoverEffect(profilePicture, 1));

function hoverEffect(element, scale) {
  element.style.transform = `translate(-50%, -50%) scale(${scale})`;
  element.style.transition = 'transform 0.3s ease';
}

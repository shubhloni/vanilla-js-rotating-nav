const circle = document.querySelector('.circle');
const container = document.querySelector('.container');
const nav = document.getElementById('nav');

const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');

circle.addEventListener('click', () => {
  console.log('Circle');
  circle.classList.toggle('show-nav');
  container.classList.toggle('show-nav');
  nav.classList.toggle('show-nav');
});

openBtn.addEventListener('click', () => {
  console.log('Open');

  circle.classList.add('show-nav');
  container.classList.add('show-nav');
  nav.classList.add('show-nav');
});

// closeBtn.addEventListener('click', () => {
//   console.log('Close');

//   circle.classList.remove('show-nav');
//   container.classList.remove('show-nav');
//   nav.classList.remove('show-nav');
// });

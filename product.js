const humburger = document.querySelector('.humburger');
const navlist = document.querySelector('.navlist');

humburger.addEventListener('click', () => {
  humburger.classList.toggle('active');
  navlist.classList.toggle('active');
});

document.querySelectorAll('.nav-list li a').forEach(link => {
  link.addEventListener('click', () => {
    humburger.classList.remove('active');
    navlist.classList.remove('active');
  });
});
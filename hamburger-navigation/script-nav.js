const hamburger = document.querySelector('.hamburger');
const navlist = document.querySelector('.navlist');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navlist.classList.toggle('active');
});

document.querySelectorAll('.nav-list li a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navlist.classList.remove('active');
    });
});
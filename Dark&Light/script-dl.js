const toggleBtn = document.getElementById('toggle-theme');
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // Toggle icon between moon and sun
    if (document.body.classList.contains('dark-mode')) {
        toggleBtn.classList.remove('fa-moon');
        toggleBtn.classList.add('fa-sun');
        toggleBtn.title = "Switch to Light Mode";
    } else {
        toggleBtn.classList.remove('fa-sun');
        toggleBtn.classList.add('fa-moon');
        toggleBtn.title = "Switch to Dark Mode";
    }
});

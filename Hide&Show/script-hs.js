function show() {
    const x = document.getElementById("password");
    if (x.type === 'password') {
        x.type = 'text';
    } else {
        x.type = 'password';
    }
}

function login() {
    const password = ddocument.getElementById('password').value;
    const username = document.getElementById('username').value;
    // Validate username and password
    if (password === '1234' && username === 'admin') {
        alert('Login successful!');
        window.location.href = 'lading.html'; // Redirect to welcome page
    } else {
        alert('Login failed! Please check your username and password.');
        window.location.href = 'index-hs.html'; // Redirect back to login page
    }
}
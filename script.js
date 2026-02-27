// JavaScript for Instagram-Inspired Login Page

const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('loginButton');

loginButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission

    const email = emailInput.value;
    const password = passwordInput.value;

    if (email === '' || password === '') {
        alert('Please fill in both fields.');
        return;
    }

    // Simulate a login request (to be replaced with an actual login API)
    console.log('Logging in with:', email);
    alert('Logged in successfully!'); // Placeholder response
});

// Optional: Add some styling or animations

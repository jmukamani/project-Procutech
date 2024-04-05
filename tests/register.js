const registerForm = document.getElementById('register-form');

registerForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const role = document.getElementById('role').value;

  // Send registration data to the server
  fetch('/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password, role })
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      // Registration successful
      console.log('Registration successful');
      // Redirect or display success message
    } else {
      // Registration failed
      console.error('Registration failed:', data.error);
      // Display error message
    }
  })
  .catch(error => {
    console.error('Error:', error);
    // Display error message
  });
});


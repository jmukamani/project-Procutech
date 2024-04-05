const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Send login data to the server
  fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      // Login successful
      console.log('Login successful');
      // Store user data (e.g., token, role) and redirect based on role
      localStorage.setItem('token', data.token);
      localStorage.setItem('role', data.role);
      if (data.role === 'vendor') {
        window.location.href = '/vendor-dashboard';
      } else if (data.role === 'government') {
        window.location.href = '/government-dashboard';
      }
    } else {
      // Login failed
      console.error('Login failed:', data.error);
      // Display error message
    }
  })
  .catch(error => {
    console.error('Error:', error);
    // Display error message
  });
});
// login.js
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('BRANCH').value;
  
    const loginData = {
      username: username,
      password: password,
      role: role
    };
  
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginData)
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'Login successful') {
          // Redirect to the appropriate page based on the user's role
          if (role === 'Government') {
            window.location.href = '/government-dashboard.html';
          } else if (role === 'Vendor') {
            window.location.href = '/vendor-dashboard.html';
          } else if (role === 'Bidder') {
            window.location.href = '/bidder-dashboard.html';
          }
        } else {
          alert('Invalid credentials');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
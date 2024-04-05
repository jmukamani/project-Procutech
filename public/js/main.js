$("#myCarousel").carousel({
    interval: false
  });

  // User Login
function login() {
    // Implement login logic here 
    var branch = document.getElementById("BRANCH").value.toLowerCase();
    var username = document.getElementById("username").value.toLowerCase();
    var password = document.getElementById("password").value;
  
    // Sample user data for the given usernames and passwords
    var users = [
        { branch: branch, username: "", password: "Kantanka&1" },
        { branch: branch, username: "", password: "Kantanka&13" },
        { branch: branch, username: "", password: "Kantanka&22" },
        { branch: branch, username: "", password: "Kantanka&28" },
        { branch: branch, username: "", password: "Kantanka&33" }
    ];
  
    var user = users.find(u => u.username === username);
  
    if (user && user.password === password) {
        // Redirect to the specified page
        window.location.href = "go:S123";
    } else {
        alert("Invalid credentials. Please try again.");
    }
  }
  
  function showRegistrationForm() {
    document.getElementById("registrationContainer").style.display = "block";
    document.getElementById("loginContainer").style.display = "none";
  }
  
  function showLogin() {
    document.getElementById("loginContainer").style.display = "block";
    document.getElementById("registrationContainer").style.display = "none";
  }
  
  // User Registration
  const registerForm = document.getElementById('registerForm');
  
  registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    try {
      const response = await fetch('/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.ok) {
        // Registration successful, handle accordingly
        console.log('Registration successful');
      } else {
        // Handle registration error
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  });
  
  // Requisition Submission
  const requisitionForm = document.getElementById('requisitionForm');
  
  requisitionForm.addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const itemDescription = document.getElementById('itemDescription').value;
    const budgetAllocation = document.getElementById('budgetAllocation').value;
    const quantity = document.getElementById('quantity').value;
  
    const token = localStorage.getItem('token');
  
    try {
      const response = await fetch('/api/requisitions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ itemDescription, budgetAllocation, quantity }),
      });
  
      if (response.ok) {
        // Requisition submitted successfully, handle accordingly
        console.log('Requisition submitted');
      } else {
        // Handle requisition submission error
        console.error('Requisition submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  });
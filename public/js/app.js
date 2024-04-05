// app.js

// Toggle mobile menu
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  }
};

showMenu('nav-toggle', 'nav-menu');

// Active and remove menu
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  // Active link
  navLink.forEach((n) => n.classList.remove('active'));
  this.classList.add('active');

  // Remove menu mobile
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show');
}

navLink.forEach((n) => n.addEventListener('click', linkAction));

// Scroll reveal animation
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true,
});

// Scroll home
sr.reveal('.home__title', {});
sr.reveal('.button', { delay: 200 });
sr.reveal('.home__img', { delay: 400 });
sr.reveal('.home__social-icon', { interval: 200 });

// Scroll about
sr.reveal('.about__img', {});
sr.reveal('.about__subtitle', { delay: 200 });
sr.reveal('.about__text', { delay: 400 });

// Scroll skills
sr.reveal('.skills__subtitle', {});
sr.reveal('.skills__text', { delay: 200 });
sr.reveal('.skills__data', { interval: 200 });
sr.reveal('.skills__img', { delay: 400 });

// Scroll work
sr.reveal('.work__img', { interval: 200 });

// Scroll contact
sr.reveal('.contact__input', { interval: 200 });

// Login and Registration
function showRegistrationForm() {
  document.getElementById('loginContainer').style.display = 'none';
  document.getElementById('registrationContainer').style.display = 'block';
}

function showLoginForm() {
  document.getElementById('registrationContainer').style.display = 'none';
  document.getElementById('loginContainer').style.display = 'block';
}

// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const role = document.getElementById('BRANCH').value;

  // Create an object with the login data
  const loginData = {
    username: username,
    password: password,
    role: role,
  };

  // Send a POST request to the server with the login data
  fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginData),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        // Login successful, redirect to the appropriate page based on the user's role
        if (role === 'Government') {
          window.location.href = '/government-dashboard.html';
        } else if (role === 'Vendor') {
          window.location.href = '/vendor-dashboard.html';
        } else if (role === 'Bidder') {
          window.location.href = '/bidder-dashboard.html';
        }
      } else {
        // Login failed, display an error message
        alert('Invalid username or password');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
});

// Handle registration form submission
document.getElementById('registrationForm').addEventListener('submit', function (event) {
  event.preventDefault();
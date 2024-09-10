const form = document.querySelector('form');
const usernameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();
  const email = emailInput.value.trim();
  const confirmPassword = confirmPasswordInput.value.trim();

  if (username === '') {
    alert('Please enter a username');
    return;
  }

  if (email === '') {
    alert('Please enter a e-mail');
    return;
  }

  if (password === '') {
    alert('Please enter a password');
    return;
  }
   

  if (confirmPassword === '') {
    alert('Please Confirm the password');
    return;
  }

  return  window.location.href = 'login.html';
});
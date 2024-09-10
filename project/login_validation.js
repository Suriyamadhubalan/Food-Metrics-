const form = document.querySelector('form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (username === '') {
    alert('Please enter a username');
    return;
  }

  if (password === '') {
    alert('Please enter a password');
    return;
  }
   
  return  window.location.href = 'home2.html';
});
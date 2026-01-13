const Loginbutton = document.querySelector('.button-style');
const emailInput = document.getElementById('email');
const passInput = document.getElementById('pass');
Loginbutton.addEventListener('click', function (event) {
    event.preventDefault();
    const email = emailInput.value;
    const pass = passInput.value;
    if (email === '' || pass === '') {
        alert('Please fill in all fields.');
        return;
    }
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPass', pass);
    alert('Login successful data saved to local storage.');
    window.location.href = 'dashboard.html';
});

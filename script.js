function validateForm() {
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm-password').value;
    let errorMessage = document.getElementById('error-message');

    // Clear previous error message
    errorMessage.textContent = '';

    // Validate fields
    if (username === '' || email === '' || password === '' || confirmPassword === '') {
        errorMessage.textContent = 'All fields are required!';
        return false;
    }

    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match!';
        return false;
    }

    if (password.length < 6) {
        errorMessage.textContent = 'Password should be at least 6 characters!';
        return false;
    }

    // If everything is valid, you can submit the form (for now, it prevents actual submission)
    alert('Sign up successful!');
    return false;
}

  
document.getElementById('navigateButton').addEventListener('click', function() {
    window.location.href = 'new.html'; // Replace with the path to the page you want to navigate to
  });
  
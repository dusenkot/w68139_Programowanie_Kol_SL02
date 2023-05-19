const registrationForm = document.getElementById('registrationForm');

    registrationForm.addEventListener('submit', function(event) {
      event.preventDefault(); 

      const loginInput = document.getElementById('login');
      if (loginInput.value.length < 3) {
        showError('loginError', 'Login musi zawierać co najmniej 3 znaki.');
      }

      const emailInput = document.getElementById('email');
      if (!validateEmail(emailInput.value)) {
        showError('emailError', 'Wprowadź poprawny adres email.');
      }

      const passwordInput = document.getElementById('password');
      if (!isPasswordStrong(passwordInput.value)) {
        showError('passwordError', 'Hasło musi zawierać co najmniej 8 znaków, w tym jedną dużą literę, jedną małą literę oraz cyfrę.');
      }

      const confirmPasswordInput = document.getElementById('confirmPassword');
      if (passwordInput.value !== confirmPasswordInput.value) {
        showError('confirmPasswordError', 'Hasła nie są identyczne.');
      }


    function validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }

    function isPasswordStrong(password) {
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
      return passwordRegex.test(password);
    }
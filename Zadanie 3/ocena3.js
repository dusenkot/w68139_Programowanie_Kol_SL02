function validateForm() {
    var login = document.forms["registrationForm"]["login"].value;
    var email = document.forms["registrationForm"]["email"].value;
    var password = document.forms["registrationForm"]["password"].value;
    var confirmPassword = document.forms["registrationForm"]["confirmPassword"].value;
    
    if (login.length < 3) {
      alert("Login musi mieć co najmniej 3 znaki!");
      return false;
    }
    
    if (!validateEmail(email)) {
      alert("Niepoprawny adres email!");
      return false;
    }
    
    if (password.length < 8) {
      alert("Hasło musi mieć co najmniej 8 znaków!");
      return false;
    }
    
    if (password !== confirmPassword) {
      alert("Potwierdzenie hasła nie zgadza się z hasłem!");
      return false;
    }
  }
  
  function validateEmail(email) {
    var emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  }
function register() {
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  var errorMessage = document.getElementById("error-message");

  // Simple validation
  if (password !== confirmPassword) {
      errorMessage.textContent = "Passwords do not match. Please try again.";
      return;
  }

  // You can add more validation here

  // Successful registration (you can send data to the server here)
  alert("Registration successful!");
}

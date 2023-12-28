function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var errorMessage = document.getElementById("error-message");

  // Simple validation
  if (username === "user" && password === "password") {
      // Successful login (you can redirect to another page here)
      alert("Login successful!");
  } else {
      errorMessage.textContent = "Invalid username or password. Please try again.";
  }
}

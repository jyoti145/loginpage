// Function to display the modal
function openModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

// Function to handle login
function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var errorText = document.getElementById("errorText");

  if (username === "" && password === "") {
    errorText.textContent = "Username or password is empty";
  } else {
    // Perform login logic here
    errorText.textContent = "";
    // Redirect to the logged-in page or perform other actions
  }
}

// Function to handle sign up
function signup() {
  var name = document.getElementById("signupName").value;
  var email = document.getElementById("signupEmail").value;
  var password = document.getElementById("signupPassword").value;
  var signupDetails = document.getElementById("signupDetails");

  if (name === "" || email === "" || password === "") {
    signupDetails.textContent = "Please fill in all the fields.";
  } else {
    signupDetails.innerHTML = "<h3>Sign Up Details</h3>" +
      "<p><strong>Name:</strong> " + name + "</p>" +
      "<p><strong>Email:</strong> " + email + "</p>" +
      "<p><strong>Password:</strong> " + password + "</p>";
  }
}

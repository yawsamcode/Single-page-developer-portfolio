// Basic form validation
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    let valid = true;

    // Name validation
    const nameInput = document.getElementById("name");
    const nameError = document.getElementById("nameError");
    if (nameInput.value.trim() === "") {
      valid = false;
      nameError.innerText = "Name is required";
    } else {
      nameError.innerText = "";
    }

    // Email validation
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      valid = false;
      emailError.innerText = "Enter a valid email address";
    } else {
      emailError.innerText = "";
    }

    // Message validation
    const messageInput = document.getElementById("message");
    const messageError = document.getElementById("messageError");
    if (messageInput.value.trim() === "") {
      valid = false;
      messageError.innerText = "Message is required";
    } else {
      messageError.innerText = "";
    }

    // Prevent form submission if validation fails
    if (!valid) {
      event.preventDefault();
    }
  });

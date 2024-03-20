function validation() {
  var email = document.f1.email.value;
  var password = document.f1.password.value;
  var emailError = document.querySelector("#email_error");
  var passwordError = document.querySelector("#password_error");

  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const password_pattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (email == "") {
    emailError.innerHTML = "email is required";
    emailError.style.color = "red";
    return false;
  } else {
    emailError.innerHTML = "";
  }
  if (!email_pattern.test(email)) {
    emailError.innerHTML = "email didn't match";
    emailError.style.color = "red";
    return false;
  } else {
    emailError.innerHTML = "";
  }
  if (password == "") {
    passwordError.innerHTML = "password is required";
    passwordError.style.color = "red";
    return false;
  } else {
    passwordError.innerHTML = "";
  }
  if (!password_pattern.test(password)) {
    passwordError.innerHTML = "password be like this -- P@ssw0rd! --";
    // passwordError.innerHTML = alert("password should be like -- P@ssw0rd! --");
    passwordError.style.color = "red";
    return false;
  } else {
    passwordError.innerHTML = "";
  }
  // Clearing password error if password is valid
  passwordError.innerHTML = "";
  return true;
}

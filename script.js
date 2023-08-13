const wrapper = $(".wrapper");
const signUpBtn = $(".login .register-link");
const loginBtn = $(".signUp .login-link");
const passwordCheckBox = $(".options .pass-check");
const password = $(".input-field.pass-box input");
const icon = $(".wrapper .icon i");

function login(){
  wrapper.addClass("toggle");
}

function removeLoginForm(){
  wrapper.removeClass("toggle");
}

function showSignUpForm() {
  wrapper.addClass("active");
}

function showLoginForm() {
  wrapper.removeClass("active");
}

function showPassword() {
  if (passwordCheckBox.prop("checked")) {
    password.attr("type", "text");
  } else {
    password.attr("type", "password");
  }
}

signUpBtn.on("click", showSignUpForm);
icon.on("click", removeLoginForm);
loginBtn.on("click", showLoginForm);
passwordCheckBox.on("change", showPassword);

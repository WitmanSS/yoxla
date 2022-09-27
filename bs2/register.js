const form = document.querySelector("form");
const usernameInput = document.getElementById("Inputusername");
const emailInput = document.getElementById("InputEmail");
const passwordInput = document.getElementById("InputPassword");
const usernameError = document.getElementById("username-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");


form.addEventListener("submit", (e) => {
  e.preventDefault();
  let check = true;
  const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  if (!usernameInput.value.trim()) {
    usernameError.textContent = "Cənab tankçı adınızı daxil edin!";
    usernameError.style.color = "red";
    check = false;
  }
  if (!emailInput.value.trim()) {
    emailError.textContent = "Xahis olunur emailinizi daxil edin!";
    emailError.style.color = "red";
    check = false;
  } else if (!pattern.test(emailInput.value.trim())) {
    emailError.textContent = "Duzgun email daxil edin!";
    emailError.style.color = "red";
    check = false;
  }
  if (!passwordInput.value.trim()) {
    passwordError.textContent = "Xahis olunur parol daxil edin!";
    passwordError.style.color = "red";
    check = false;
  } else if (!(passwordInput.value.trim().length >= 8)) {
    passwordError.textContent = "Xahis olunur en azi 8 simvol daxil edin!";
    passwordError.style.color = "red";
    check = false;
  }
  if (check) {
    usernameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    console.log(usernameInput.value, emailInput.value, passwordInput.value);
    const user = {
      name: usernameInput.value.trim(),
      email: emailInput.value.trim(),
      password: passwordInput.value.trim(),
    };
    localStorage.setItem("user", JSON.stringify(user));
    passwordInput.value = "";
    usernameInput.value = "";
    emailInput.value = "";
    alert("Successfull register");
    window.location.href =
      "C:\Users\PREDATOR\bs2\bs2.html";
  }
});
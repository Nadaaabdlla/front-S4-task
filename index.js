/* ===== Elements ===== */
const body = document.body;

// Theme elements
const lightBtn = document.getElementById("lightBtn");
const darkBtn = document.getElementById("darkBtn");
const card = document.querySelector(".card");

// Form elements
const form = document.getElementById("myForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
const email = document.getElementById("email");
const generalMessage = document.getElementById("generalMessage");

/* ===== Theme Controller ===== */
lightBtn.addEventListener("click", function () {
  body.classList.remove("dark");
  body.classList.add("light");
  lightBtn.classList.toggle("clicked");
  darkBtn.classList.toggle("clicked");

});
darkBtn.addEventListener("click", function () {
  body.classList.remove("light");
  body.classList.add("dark");
  darkBtn.classList.toggle("clicked");
  lightBtn.classList.toggle("clicked");
});

/* ===== Form Validation ===== */
function validate(input, condition, errorMsg) {
  const msgDiv = input.nextElementSibling;

  if (condition) {
    msgDiv.innerText = "Valid";
    msgDiv.className = "success";
    return true;
  } else {
    msgDiv.innerText = errorMsg;
    msgDiv.className = "error";
    return false;
  }
}
// Live validation
username.addEventListener("input", function () {
  validate(username, username.value.length >= 3, "Username must be at least 4 characters");
});

password.addEventListener("input", function () {
  validate(password, password.value.length >= 8, "Password must be at least 8 characters");
});

email.addEventListener("input", function () {
  validate(email, email.value.includes("@"), "Email must contain @");
});
// Submit
let infoCon = document.createElement("div");
infoCon.id = "infoCon";
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const isUserValid = validate(username, username.value.length >= 3, "Username must be at least 4 characters");
  const isPassValid = validate(password, password.value.length >= 8, "Password must be at least 8 characters");
  const isEmailValid = validate(email, email.value.includes("@"), "Email must contain @");
  body.appendChild(infoCon);
  if (!isUserValid || !isPassValid || !isEmailValid) {
    e.preventDefault();
    generalMessage.innerText = "Please fix errors before submitting";
    generalMessage.className = "error";
  } else {
    generalMessage.innerText = "Form submitted successfully ✔";
    generalMessage.className = "success";

    let personInfoCon = document.createElement("div");
    personInfoCon.classList.add("personInfoCon")
    let p = document.createElement("p").textContent = `username is ${username.value}`;
    let ol = document.createElement("ol");
    let li1 = document.createElement("li");
    li1.textContent = `email is ${email.value}`;
    let li2 = document.createElement("li");
    li2.textContent = `password is ${password.value}`;
    ol.append(li1, li2);
    personInfoCon.append(p, ol);
    infoCon.append(personInfoCon);
    document.querySelectorAll("input").forEach((input) => {
      input.value = "";
    });
  }
});

// const submitElem = document.getElementById("submit");
// submitElem.addEventListener("click", validate);

function Validate(e) {
  e.preventDefault();
  const firstNameElem = document.getElementById("firstNameInput");
  const midNameElem = document.getElementById("middleNameInput");
  const lastNameElem = document.getElementById("lastNameInput");
  const emailElem = document.getElementById("emailInput");
  const passwordElement = document.getElementById("passwordInput");
  const confirmPasswordElement = document.getElementById(
    "confirmPasswordInput"
  );
  const charectorpattern = /[a-zA-Z]+/;
  const emailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/;
  const passwordPattern = /(?=.*d)(?=.*[#?!@$%^&*-])[A-Za-z\d#$@!%&*?].{8,}/;
  const confirmpattern = /(?=.*d)(?=.*[#?!@$%^&*-])[A-Za-z\d#$@!%&*?].{8,}/;

  if (!charectorpattern.test(firstNameElem.value)) {
    firstNameElem.style.color = "red";
    firstNameElem.style.border = "1px solid red";
  } else {
    firstNameElem.style.color = "black";
    firstNameElem.style.border = "1px solid black";
  }
  if (!charectorpattern.test(midNameElem.value)) {
    midNameElem.style.color = "red";
    midNameElem.style.border = "1px solid red";
  } else {
    midNameElem.style.color = "black";
    midNameElem.style.border = "1px solid black";
  }
  if (!charectorpattern.test(lastNameElem.value)) {
    lastNameElem.style.color = "red";
    lastNameElem.style.border = "1px solid red";
  } else {
    lastNameElem.style.color = "black";
    lastNameElem.style.border = "1px solid black";
  }
  if (!emailPattern.test(emailElem.value)) {
    emailElem.style.color = "red";
    emailElem.style.border = "1px solid red";
  } else {
    emailElem.style.color = "black";
    emailElem.style.border = "1px solid black";
  }
  if (!passwordPattern.test(passwordElement.value)) {
    passwordElement.style.color = "red";
    passwordElement.style.border = "1px solid red";
  } else {
    passwordElement.style.color = "black";
    passwordElement.style.border = "1px solid black";
  }
  if (!confirmpattern.test(confirmPasswordElement.value)) {
    confirmPasswordElement.style.color = "red";
    confirmPasswordElement.style.border = "1px solid red";
  } else {
    confirmPasswordElement.style.color = "black";
    confirmPasswordElement.style.border = "1px solid black";
  }

  if (passwordElement.value !== confirmPasswordElement.value) {
    alert("Passwords do not match.");
  }
  //   alert("Form submitted sucessfully");
}

/**
 *
 * FirstName
 * MidName:
 * lastName:
 * pattern="[a-zA-Z]+"
 * email:
 * pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"
 * password:
 * pattern="(?=.*\d)(?=.*[#?!@$%^&*-]).{8,}"
 * Confirm Password:
 * pattern="(?=.*\d)(?=.*[#?!@$%^&*-]).{8,}"
 * pattern="(?=.*[0-9])(?=.*[#?!@$%^&*-])[A-Za-z\d#$@!%&*?].{8,}$"
 */

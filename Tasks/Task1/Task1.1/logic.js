// const submitElem = document.getElementById("submit");
// submitElem.addEventListener("click", validate);

function Validate() {
  //   e.preventDefault;
  const firstNameElem = document.getElementById("firstNameInput").value;
  const midNameElem = document.getElementById("middleNameInput").value;
  const lastNameElem = document.getElementById("lastNameInput").value;
  const emailElem = document.getElementById("emailInput").value;
  const passwordElement = document.getElementById("passwordInput").value;
  const confirmPasswordElement = document.getElementById(
    "confirmPasswordInput"
  ).value;
  const charectorpattern = /[a-zA-Z]+/;
  const emailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/;
  const passwordPattern = /(?=.*d)(?=.*[#?!@$%^&*-])[A-Za-z\d#$@!%&*?].{8,}/;
  const confirmpattern = /(?=.*d)(?=.*[#?!@$%^&*-])[A-Za-z\d#$@!%&*?].{8,}/;

  if (!charectorpattern.exec(firstNameElem)) {
    firstNameElem.innerText = "Invalid";
    firstNameElem.style.color = "red";
    firstNameElem.style.border = "1px solid red";
  }
  if (!charectorpattern.exec(midNameElem)) {
    midNameElem.innerText = "Invalid";
    midNameElem.style.color = "red";
    midNameElem.style.border = "1px solid red";
  }
  if (!charectorpattern.exec(lastNameElem)) {
    lastNameElem.innerText = "Invalid";
    lastNameElem.style.color = "red";
    lastNameElem.style.border = "1px solid red";
  }
  if (!emailPattern.exec(emailElem)) {
    emailElem.innerText = "Invalid";
    emailElem.style.color = "red";
    emailElem.style.border = "1px solid red";
  }
  if (!passwordPattern.exec(passwordElement)) {
    passwordElement.innerText = "Invalid";
    passwordElement.style.color = "red";
    passwordElement.style.border = "1px solid red";
  }
  if (!confirmpattern.exec(confirmPasswordElement)) {
    confirmPasswordElement.innerText = "Invalid";
    confirmPasswordElement.style.color = "red";
    confirmPasswordElement.style.border = "1px solid red";
  }

  if (passwordElement !== confirmPasswordElement) {
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

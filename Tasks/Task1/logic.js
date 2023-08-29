// const submitElem = document.getElementById("submit");
// submitElem.addEventListener("click", validate);

function Validate() {
  const passwordElement = document.getElementById("passwordLabel");
  const confirmPasswordElement = document.getElementById(
    "confirmPasswordLabel"
  );

  if (passwordElement.value !== confirmPasswordElement.value) {
    alert("Passwords do not match.");
    return false;
  }
  return true;
}

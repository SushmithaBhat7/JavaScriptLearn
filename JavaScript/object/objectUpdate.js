const profile = {};
function updateObj(key, value) {
  profile[key] = value;
}

updateObj("name", "Gunjan");
updateObj("city", "Pune");
updateObj("company", "Google");
updateObj("department", "Full Stack Developer");
updateObj("gender", "Male");

console.log(profile);

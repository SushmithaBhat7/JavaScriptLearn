
const profile = {

  name: "One",

  city: "ABC",

};

// Add new data, post

profile.country = "USA";

profile["country"] = "India";

// Update existing data, put

profile.city = "Goa";

console.log("profile", profile);

console.log("profile.country", profile.country);

const profile = { name: "Tarun", city: "Chennai", company: "CES" };


// Delete a data -> Delete key & value

delete profile.city;



console.log(profile);





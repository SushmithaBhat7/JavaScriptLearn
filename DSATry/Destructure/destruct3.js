const profile = {
    userName: "Arvind",
    city: "Bhopal",
    company: "Google",
    location: "Munich",
  };
  
  // Old Way vs New way
  
  // Old ways
  // Hello My name is Arvind & an Google Munich Employee,
  // i'm from Bhopal.
  // I got a job offer from Google Munich,
  // though i belong to bhopal still Google offered me
  
  const message = `Hello My name is ${profile.userName} & an  ${
    profile.company
  }  ${profile.location} Employee,
  i'm from Bhopal. I got a job offer from ${profile.company} ${
    profile.location
  }, though i belong to ${profile.city.toLowerCase()} still ${
    profile.company
  } offered me`;
  
  console.log("message Message: ", message);
  
  // Another way
  
  const employeeName = profile.userName;
  const employeeCompany = profile.company;
  const employeeCity = profile.city;
  const employeeCompanyLocation = profile.location;
  
  const message2 = `Hello My name is ${employeeName} & an  ${employeeCompany}  ${employeeCompanyLocation} Employee,
    i'm from Bhopal. I got a job offer from ${employeeCompany} ${employeeCompanyLocation}, though i belong to ${employeeCity.toLowerCase()} still ${employeeCompany} offered me`;
  
  console.log("message2 Message: ", message2);
  
  // Another Recommended way
  
//   const { userName, city, company, location } = profile;
  
//   const message3 = `Hello My name is ${userName} & an  ${company}  ${location} Employee,
//     i'm from Bhopal. I got a job offer from ${company} ${location}, though i belong to ${city.toLowerCase()} still ${company} offered me`;
  
//   console.log("message3 Message: ", message3);
const {userName,company,city,location} = profile;

const message3 = `Hello My name is ${userName} & an  ${company}  ${location} Employee,
    i'm from Bhopal. I got a job offer from ${company} ${location}, though i belong to ${city.toLowerCase()} still ${company} offered me`;
  
  console.log("message2 Message: ", message3);
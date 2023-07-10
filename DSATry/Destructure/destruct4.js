const profile = {
    uName: "Palak",
    city: "Jabalpur",
  };
  
  const profile2 = {
    uName: "Chirag",
    city: "Paris",
  };
  
  const profile3 = {
    uName: "Sanket",
    city: "Thailand",
    details: {
      country: "India",
    },
  };
  
  const { uName, city } = profile;
  const { uName: chotu, city: ghar } = profile2;
  const { details } = profile3;
  const { country } = details;
  
  console.log({ uName, city });
  console.log({ chotu, ghar });
  
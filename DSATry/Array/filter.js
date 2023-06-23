const profiles = [
    {
      name: "Rahul",
      age: 28,
      city: "bangalore",
    },
    {
      name: "Varun",
      age: 22,
      city: "Mumbai",
    },
    {
      name: "Tarun",
      age: 24,
      city: "Pune",
    },
    {
      name: "Mitesh",
      age: 29,
      city: "Mumbai",
    },
  ];
  
  // legacy way
  for (let i = 0; i < profiles.length; i++) {
    profiles[i].pincode = 476001;
  }
  
  // New Way
  const newResult = profiles.map((item) => {
    item.pincode = 47699901;
    return item;
  });
  
  console.log(profiles, newResult);
  
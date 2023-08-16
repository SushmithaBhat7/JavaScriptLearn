
  const arrObjc = [
    {
      id: 1,
      name: "John Doe",
      city: "New York",
      state: "New York",
      isActive: true,
    },
    {
      id: 2,
      name: "Jane Smith",
      city: "Los Angeles",
      state: "California",
      isActive: false,
    },
    {
      id: 3,
      name: "Michael Johnson",
      city: "Chicago",
      state: "Illinois",
      isActive: true,
    },
    {
      id: 4,
      name: "Emily Brown",
      city: "Houston",
      state: "Texas",
      isActive: true,
    },
  ];


const outArrMap = arrObjc.map((item,index)=>{
    
    const newItem = {...item};
    const {isActive}=newItem;
    if(isActive===true){
        newItem.isActive = "Available"; 
    }else{
        newItem.isActive = "Not Available";
    }
    return newItem
  });

  console.log({arrObjc,outArrMap});
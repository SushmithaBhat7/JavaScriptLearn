const product = {
    id: 1,
    name: "iPad Pro 11 Inch",
    brand: "Apple",
    price: 78000,
    currency: "INR",
  };
  
  const uName = product.name;
  const price = product.price;
  const isActive = product.isActive || "Not Available";
  
  const message = `I'm buying ${product.brand} ${product.name}`;
  
  console.log(uName, price, isActive, message);
  
  console.log({ uName, price, isActive, message });
  
  
  
  // ES6 Ways
  //Destructuring
  
  const product2 = {
    id: 1,
    productName: "iPad Pro 11 Inch",
    productBrand: "Apple",
    productPrice: 78000,
    productCurrency: "INR",
  };
  
  const { productName, productBrand, isActive = "Not Available" } = product2;
  
  const message = `I'm ${productBrand} ${productName} ${isActive}`;
  
  console.log({ message });
  
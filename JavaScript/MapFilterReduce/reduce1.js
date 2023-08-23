let arr = [
  {
    name: "Designer Watch",
    price: 299.5,
    category: "Fashion",
    description: "Elegant watch with a unique design.",
  },
  {
    name: "Gaming Console",
    price: 349.99,
    category: "Electronics",
    description: "Next-gen gaming console for immersive gameplay.",
  },
];

//   o/p :
//   [
//     {
//       name: "Designer Watch",
//         updatedPrice: 303,
//     }
//     ]

const filterOutput = arr.reduce((accumulator, currentVal, index, arr) => {
  // accumulator.name = arr[0].name;
  // accumulator.updatedPrice += currentVal.price;
  const data = {
    name: currentVal.name,
    updatedPrice: currentVal.price + 10,
  };
  accumulator.push(data);

  return accumulator;
}, []);

console.log({ filterOutput });

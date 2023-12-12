const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

const orders = [
  { userId: 1, id: 101, name: "Product A", price: 10 },
  { userId: 1, id: 102, name: "Product B", price: 20 },
  { userId: 2, id: 103, name: "Product C", price: 15 },
];

const outputExpected = [
  {
    userId: 1,
    userName: "Alice",
    orders: [
      { orderId: 101, name: "Product A", price: 10 },
      { orderId: 102, name: "Product B", price: 20 },
    ],
  },
  {
    userId: 2,
    userName: "Bob",
    orders: [{ orderId: 103, name: "Product C", price: 15 }],
  },
  {
    userId: 3,
    userName: "Charlie",
    orders: [],
  },
];

let mergeData = (users, orders) => {
  let mergedResponse = [];
  for (let i = 0; i < users.length; i++) {
    let objc = {};
    objc["userId"] = users[i].id;
    objc["userName"] = users[i].name;
    objc["orders"] = [];
    for (let j = 0; j < orders.length; j++) {
      if (orders[j].userId === objc["userId"]) {
        let objcOrder = {};
        objcOrder["orderId"] = orders[j].id;
        objcOrder["name"] = orders[j].name;
        objcOrder["price"] = orders[j].price;
        objc["orders"].push(objcOrder);
      }
    }
    mergedResponse.push(objc);
  }
  return mergedResponse;
};

console.log(mergeData(users, orders));

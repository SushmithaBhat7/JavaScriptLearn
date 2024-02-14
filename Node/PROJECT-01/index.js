const express = require("express");
const app = express();
const PORT = 8001;
const fs = require("fs");
const users = require("./MOCK_DATA.json");

//Middleware - plugin
app.use(express.urlencoded({ extended: false }));

app.get("/users", (request, response) => {
  const html = `
      <ul>
      ${users
        .map((user) => {
          return `<li>${user.first_name}</li>`;
        })
        .join("")}
      </ul>
      `;
  return response.send(html);
});

app.get("/api/users", (request, response) => {
  return response.json(users);
});
app.post("/api/users", (request, response) => {
  const body = request.body;
  // console.log("body", body);
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return response.json({ status: "Pending", id: users.length + 1 });
  });
});

app
  .route("/api/users/:id")
  .get((request, response) => {
    const id = Number(request.params.id);
    const user = users.find((user) => {
      return user.id === id;
    });
    return response.json(user);
  })
  .post((request, response) => {
    //Edit User with ID
    return response.json({ status: "pending" });
  })
  .delete((request, response) => {
    //Delete User with ID
    return response.json({ status: "Pending" });
  });

app.listen(PORT, () => {
  console.log(`Server Started at ${PORT}`);
});

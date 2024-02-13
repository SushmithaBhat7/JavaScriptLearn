const express = require("express");
const app = express();
const PORT = 8001;
const users = require("./MOCK_DATA.json");

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

app.get("/api/users/:id", (request, response) => {
  const id = Number(request.params.id);
  const user = users.find((user) => {
    return user.id === id;
  });
  return response.json(user);
});

app.listen(PORT, () => {
  console.log(`Server Started at ${PORT}`);
});

const express = require("express");
const app = express();
const PORT = 8001;
const fs = require("fs");
let users = require("./MOCK_DATA.json");
const { default: mongoose } = require("mongoose");

//connection for mongoose from mongodb
mongoose
  .connect("mongodb://127.0.0.1:27017/YTapp-1")
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log("Error :", err);
  });

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  jobTitle: {
    type: String,
  },
  gender: {
    type: String,
  },
});

const User = mongoose.model("user", userSchema);
//Middleware - plugin
app.use(express.urlencoded({ extended: false }));

//Custom Middleware 1
app.use((request, response, next) => {
  // console.log("Hello from middleware1"); => Holding request not returning or forwarding
  // return response.json({ msg: "Middleware 1" }); => Ending Request
  request.creditCardId = 12345; //=>Making changes to the existing request
  next(); //Forwarding the request to next middleware
});

//Custom Middleware 2
app.use((request, response, next) => {
  console.log("Middleware 2", request.creditCardId);
  fs.appendFile(
    "log.txt",
    `Date : ${Date.now()}, Method : ${request.method}, Path : ${
      request.path
    }, IP : ${request.ip} \n`,
    (err, data) => {
      next();
    }
  );
});

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
  // request.setHeader("X-UseCase", "Practice");
  response.setHeader("X-MyName", "Sushmitha Bhat");
  return response.json(users);
});
app.post("/api/users", (request, response) => {
  const body = request.body;
  // console.log("body", body);
  if (!body || !body.first_name || !body.last_name) {
    response.status(400).json({ msg: "All feilds are required" });
  }
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return response.status(201).json({ status: "Pending", id: users.length });
  });
});

app
  .route("/api/users/:id")
  .get((request, response) => {
    const id = Number(request.params.id);
    const user = users.find((user) => {
      return user.id === id;
    });
    if (!user) return response.status(404).json({ msg: "User Not found" });
    return response.json(user);
  })
  .patch((request, response) => {
    //Edit User with ID
    const id = Number(request.params.id);
    const user = users.find((user) => {
      return user.id === id;
    });
    const body = request.body;
    for (const key in body) {
      if (user.hasOwnProperty(key)) {
        user[key] = body[key];
      }
    }
    users[id - 1] = user;
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
      return response.json({ status: "pending", id: id });
    });
  })
  .delete((request, response) => {
    //Delete User with ID
    const id = Number(request.params.id);
    console.log("id", id);
    const userList = users.filter((user) => {
      return user.id !== id;
    });
    users = userList;
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(userList), (err, data) => {
      return response.json({ status: "Pending" });
    });
  });

app.listen(PORT, () => {
  console.log(`Server Started at ${PORT}`);
});

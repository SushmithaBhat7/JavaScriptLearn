const express = require("express");
const app = express();
const PORT = 8001;
const fs = require("fs");
// let users = require("./MOCK_DATA.json");
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

const userSchema = new mongoose.Schema(
  {
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
  },
  {
    timestamps: true,
  }
);

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
  // console.log("Middleware 2", request.creditCardId);
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

app.get("/users", async (request, response) => {
  const allDbUsers = await User.find({});

  const html = `
      <ul>
      ${allDbUsers
        .map((user) => {
          return `<li>${user.firstName}-${user.email}</li>`;
        })
        .join("")}
      </ul>
      `;
  return response.send(html);
});

app.get("/api/users", async (request, response) => {
  // request.setHeader("X-UseCase", "Practice");
  response.setHeader("X-MyName", "Sushmitha Bhat");
  const allDbUsers = await User.find({});
  return response.json(allDbUsers);
});
app.post("/api/users", async (request, response) => {
  const body = request.body;
  // console.log("body", body);
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title
  ) {
    response.status(400).json({ msg: "All feilds are required" });
  }
  const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender,
    jobTitle: body.job_title,
  });
  // console.log("Result", result);
  return response.status(204).json({ msg: "Success" });
});

app
  .route("/api/users/:id")
  .get(async (request, response) => {
    // const id = Number(request.params.id);

    const user = await User.findById(request.params.id);
    if (!user) return response.status(404).json({ msg: "User Not found" });
    return response.json(user);
  })
  .patch(async (request, response) => {
    //Edit User with ID
    await User.findByIdAndUpdate(request.params.id, { lastName: "Changed" });
    return response.json({ status: "Success" });
  })
  .delete(async (request, response) => {
    //Delete User with ID
    await User.findByIdAndDelete(request.params.id);
    return response.json({ status: "Success" });
  });

app.listen(PORT, () => {
  console.log(`Server Started at ${PORT}`);
});

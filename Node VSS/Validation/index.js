const express = require("express");
const app = express();
const PORT = 7001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Global middleware validation
app.use((req, res, next) => {
  req.setTimeout(5000, () => {
    const error = new Error("Request Timeout");
    error.status = 408; // Request Timeout
    next(error);
  });
  next();
});

// Error handling middleware
app.use((err, req, res, next) => {
  if (err.status === 408) {
    res.status(408).json({ error: "Request Timeout" });
  } else {
    res.status(err.status || 500).json({ error: err.message });
  }
});

app.post("/", (request, response) => {
  console.log("body", request.body);
  const { title } = request.body;
  if (!title) {
    response.status(400).send({ msg: "Enter title" });
  }
  response.send({ msg: "Welcome to express" });
});

app.get(
  "/",
  (request, response, next) => {
    const { user } = request.query;
    if (!["bharath", "anshul"].includes(user)) {
      return response.status(400).send({ msg: "User not allowed" });
    }
    // next();
  },
  (request, response) => {
    response.send({ msg: "Hello world" });
  }
);

app.listen(PORT, () => {
  `The Server is running in localhost:${PORT}`;
});

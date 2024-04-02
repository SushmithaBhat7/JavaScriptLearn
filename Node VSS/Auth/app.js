import express from "express";
import signinRouter from "./src/account/SignIn/signin.routes.js";
const app = express();
const PORT = 8000;

app.use(express.json());
app.use("/signin", signinRouter);
app.listen(PORT, () => {
  `The Server is running in localhost:${PORT}`;
});

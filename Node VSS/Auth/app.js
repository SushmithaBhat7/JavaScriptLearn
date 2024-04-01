const express = require("express");
const app = express();
const PORT = 7001;

app.use(express.json());
app.listen(PORT, () => {
  `The Server is running in localhost:${PORT}`;
});

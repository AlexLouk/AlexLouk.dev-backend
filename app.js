const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/contact", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

const port = 5000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

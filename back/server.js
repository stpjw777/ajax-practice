const express = require("express");
const cors = require("cors");
const app = express();
const port = 8001;

app.use(cors());

// app.get("/", (req, res) => {
//   return res.send("Hello Node.js");
// });
app.get("/", (req, res) => res.send("Hello Node.js"));
app.get("/time", (req, res) => {
  time = Date();
  res.send(time);
  console.log("connected");
});

app.listen(port, () => console.log(`server running ... Port : ${port}`));

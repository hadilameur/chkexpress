const express = require("express");
const app = express();

app.use(express.jason());
const PORT = 5000;

app.get("/", (req, res) => res.send("Resquest "));

app.listen(PORT, (err) =>
  err
    ? console.log(err)
    : console.log(`server is runninig on port   ${PORT}...`)
);

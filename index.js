const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("HEADERS", req.headers);
  console.log("QUERY", req.query);
  console.log("PARAMS", req.params);

  res.send().status(200);
});

app.listen(7777, () => console.log("Listening on port 7777"));

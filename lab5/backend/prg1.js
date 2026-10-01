import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Express!");
});

app.listen(4444, () => console.log("prg1 is running on port 4444"));

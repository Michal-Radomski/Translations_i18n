const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const text = {
  en: "This is sample text.\nThis is a second line.",
  pl: "To jest przykładowy tekst.\nTo jest druga linia.",
};

app.get("/text", (req, res) => {
  const locale = req.header("Accept-Language").substr(0, 2);
  res.send({text: [locale]});
});

app.post("/like", (req, res) => {
  res.send({message: "Thank you"});
});

app.listen(8000);

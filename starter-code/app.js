const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "pug");
app.use(express.static("public"));

app.get("/", (request, response) => {
  response.send(
    "Hello, this is my first web site. You can also check two other pages <a href = '/about'> about </a> and images."
  );
});

app.get("/about", (req, res) => {
  res.send(
    "Click here to go back to <a href = '/'> main page </a> .! You can also watch some <a href = '/gallery'> pictures here </a>"
  );
});

app.get("/gallery", function(req, res) {
  res.render("gallery", {
    title: "Hey",
    message: "Pictures"
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

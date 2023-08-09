// 14. Import express and create app variable with express method
const express = require("express");
const app = express();

// 15. Use express.static method with app, passing the public directory into express.static
app.use("/static", express.static("public"));

// 19. Add get request with anonymous controller using the res.send method to return data
app.get("/", (req, res) => {
  const msg = `This was a ${req.method} request from a browser.`;
  res.send(msg);
});

// 20. Declare a controller function that uses the res.json method to return data. Add it to another get request
function controller(req, res) {
  const data = {
    method: req.method,
    num: Math.random(),
    str: "Hello World!",
  };
  res.json(data);
}

app.get("/extra", controller);
// 21. Run the app and demo accessing the GET requests

// 16. Export app variable
module.exports = app;
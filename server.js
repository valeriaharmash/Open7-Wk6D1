// 17. Import app variable and declare a port variable
const app = require("./src/app.js");
const port = 3000;

// 18. Use app.listen method, passing a port and callback function, then run the app and display in browser
app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});

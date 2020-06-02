// node modules imports
const path = require('path');

// 3rd party modules imports
const express = require('express');
const bodyParser = require('body-parser');

// local modules imports
const shopRoutes = require('./routes/shop.routes');
const errorCtrl = require('./controllers/error.controller');

// initialize the express library
const app = express();

// it sets the EJS as the template engine used by express
app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express.static(path.join(__dirname, "public")));

// it listens for every request that starts with the root path '/'
app.use(shopRoutes);

// it shows a 404 page for the requests that didn't match any of the other routes
app.use(errorCtrl.get404);

// it starts the server listening on port 3000
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
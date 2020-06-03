// node modules imports
const path = require('path');

// 3rd party modules imports
const express = require('express');
const bodyParser = require('body-parser');

// local modules imports
const shopRoutes = require('./routes/shop.routes');
const adminRoutes = require('./routes/admin.routes.js');
const errorCtrl = require('./controllers/error.controller');
const { mongoConnect } = require('./utils/db.utils');

// initialize the express library
const app = express();

// it sets the EJS as the template engine used by express
app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express.static(path.join(__dirname, "public")));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

// it shows a 404 page for the requests that didn't match any of the other routes
app.use(errorCtrl.get404);

// it starts the server listening on port 3000
mongoConnect(() => {
  app.listen(3000, () => {
    console.log("Server listening on port 3000");
  });
});
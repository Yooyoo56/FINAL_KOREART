// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv").config();
// ℹ️ Connects to the database
//require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

// 👇 Start handling routes here
// Contrary to the views version, all routes are controlled from the routes/index.js
const allRoutes = require("./routes");
const artRoutes = require("./routes/art");
const authRoutes = require("./routes/auth");
const indexRoutes = require("./routes/index");
app.use("/api", allRoutes);
app.use("/api", artRoutes);
app.use("/api", authRoutes);
app.use("/api", indexRoutes);

// Serve static files from client/build folder
app.use(express.static("client/build"));

// For any other routes: serve client/build/index.html SPA
app.use((req, res, next) => {
	res.sendFile(`${__dirname}/client/build/index.html`, (err) => {
		if (err) next(err);
	});
});

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;

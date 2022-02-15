const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/User");
const bcrypt = require("bcryptjs");

passport.use(
	new LocalStrategy(
		{
			usernameField: "email",
			passwordField: "password",
		},
		(email, password, done) => {
			User.findOne({ email })
				.then((foundUser) => {
					if (!foundUser) {
						done(null, false, { errorMessage: "Incorrect email" });
						return;
					}

					if (!bcrypt.compareSync(password, foundUser.password)) {
						done(null, false, { errorMessage: "Incorrect password" });
						return;
					}

					done(null, foundUser);
				})
				.catch((err) => done(err));
		}
	)
);

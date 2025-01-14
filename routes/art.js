const router = require("express").Router();
const mongoose = require("mongoose");

//sending the mail from the localhost
const transporter = require("../config/mailer.config");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Require the Artist, Workart model in order to interact with the database
const User = require("../models/User.model");
const Artist = require("../models/Artist.model");
const Workart = require("../models/Workart.model");
const { getMaxListeners } = require("../models/User.model");

/*                                                                                                 
####  ###### #####          #      #  ####  #####      ##   #####  ##### #  ####  #####  ####  
#    # #        #            #      # #        #       #  #  #    #   #   # #        #   #      
#      #####    #   #####    #      #  ####    #      #    # #    #   #   #  ####    #    ####  
#  ### #        #            #      #      #   #      ###### #####    #   #      #   #        # 
#    # #        #            #      # #    #   #      #    # #   #    #   # #    #   #   #    # 
 ####  ######   #            ###### #  ####    #      #    # #    #   #   #  ####    #    ####
 */

//la base de donnees ->
router.get("/artists", (req, res, next) => {
	Artist.find()
		.then((artists) => {
			res.json({ artists });
		})
		.catch((error) => {
			res.status(500).json({ errorMessage: "Failed to load the artists page" });
		});
});

/*
#####  ####### #######             #    ######  ####### ###  #####  #######    ######  ####### #######    #    ### #        #####  
#     # #          #               # #   #     #    #     #  #     #    #       #     # #          #      # #    #  #       #     # 
#       #          #              #   #  #     #    #     #  #          #       #     # #          #     #   #   #  #       #       
#  #### #####      #    #####    #     # ######     #     #   #####     #       #     # #####      #    #     #  #  #        #####  
#     # #          #             ####### #   #      #     #        #    #       #     # #          #    #######  #  #             # 
#     # #          #             #     # #    #     #     #  #     #    #       #     # #          #    #     #  #  #       #     # 
 #####  #######    #             #     # #     #    #    ###  #####     #       ######  #######    #    #     # ### #######  #####
*/

router.get("/artists/:id", (req, res) => {
	Artist.findById(req.params.id)
		.then((artistFromDb) => {
			res.json(artistFromDb);
		})
		.catch((error) => {
			res
				.status(500)
				.json({ errorMessage: "Failed to load the artists id page" });
		});
});

/*
#####  ####### #######          #       ###  #####  #######    #     # ####### ######  #    #    #    ######  #######  #####  
#     # #          #             #        #  #     #    #       #  #  # #     # #     # #   #    # #   #     #    #    #     # 
#       #          #             #        #  #          #       #  #  # #     # #     # #  #    #   #  #     #    #    #       
#  #### #####      #    #####    #        #   #####     #       #  #  # #     # ######  ###    #     # ######     #     #####  
#     # #          #             #        #        #    #       #  #  # #     # #   #   #  #   ####### #   #      #          # 
#     # #          #             #        #  #     #    #       #  #  # #     # #    #  #   #  #     # #    #     #    #     # 
 #####  #######    #             ####### ###  #####     #        ## ##  ####### #     # #    # #     # #     #    #     #####  
*/

router.get("/workarts", (req, res) => {
	Workart.find()
		.then((workarts) => {
			res.json({ workarts });
		})
		.catch((error) => {
			res.status(500).json({ errorMessage: "Failed to load the workart page" });
		});
});

/*
#####  ####### #######          #     # ####### ######  #    #    #    ######  #######    ######  #######    #    ### #        #####  
#     # #          #             #  #  # #     # #     # #   #    # #   #     #    #       #     # #         # #    #  #       #     # 
#       #          #             #  #  # #     # #     # #  #    #   #  #     #    #       #     # #        #   #   #  #       #       
#  #### #####      #    #####    #  #  # #     # ######  ###    #     # ######     #       #     # #####   #     #  #  #        #####  
#     # #          #             #  #  # #     # #   #   #  #   ####### #   #      #       #     # #       #######  #  #             # 
#     # #          #             #  #  # #     # #    #  #   #  #     # #    #     #       #     # #       #     #  #  #       #     # 
 #####  #######    #              ## ##  ####### #     # #    # #     # #     #    #       ######  ####### #     # ### #######  ##### 
*/

router.get("/workarts/:id", (req, res) => {
	Workart.findById(req.params.id)
		.then((workartFromDb) => {
			res.json(workartFromDb);
		})
		.catch((error) => {
			res
				.status(500)
				.json({ errorMessage: "Failed to load the workart id page" });
		});
});

/*                                                                                                                                           
####  ###### #####          #    #  ####  #####  #    #   ##   #####  #####  ####     #####  #   #      ##   #####  ##### #  ####  ##### 
#    # #        #            #    # #    # #    # #   #   #  #  #    #   #   #         #    #  # #      #  #  #    #   #   # #        #   
#      #####    #   #####    #    # #    # #    # ####   #    # #    #   #    ####     #####    #      #    # #    #   #   #  ####    #   
#  ### #        #            # ## # #    # #####  #  #   ###### #####    #        #    #    #   #      ###### #####    #   #      #   #   
#    # #        #            ##  ## #    # #   #  #   #  #    # #   #    #   #    #    #    #   #      #    # #   #    #   # #    #   #   
 ####  ######   #            #    #  ####  #    # #    # #    # #    #   #    ####     #####    #      #    # #    #   #   #  ####    #
*/

router.get("/artists/:id/workarts", (req, res) => {
	Workart.find({ artist: mongoose.Types.ObjectId(req.params.id) })
		.then((workartFromDb) => {
			res.json({ workarts: workartFromDb });
		})
		.catch((error) => {
			res
				.status(500)
				.json({ errorMessage: "Failed to load the workart id page" });
		});
});

/* 
#    #   ##   # #      
##  ##  #  #  # #      
# ## # #    # # #      
#    # ###### # #      
#    # #    # # #      
#    # #    # # ######  (only worked with Gmail account!!)
*/

router.post("/contact", (req, res, next) => {
	//var name = req.body.name;
	//var email = req.body.email;
	var subject = req.body.subject;
	var message = req.body.message;

	var mail = {
		from: '"Koreart infos" <koreart@free.fr>',
		to: "koreart@free.fr", // receiver email,
		subject: subject,
		text: message,
	};

	transporter.sendMail(mail, (err, data) => {
		if (err) {
			console.log(err);
			res.status(500).json({
				status: "fail",
			});
		} else {
			res.json({
				status: "success",
			});
		}
	});
});

/*                                                                                                                
####  ###### #####          #      #  ####  #####    ######   ##   #    #  ####  #####  # ##### ######  ####  
#    # #        #            #      # #        #      #       #  #  #    # #    # #    # #   #   #      #      
#      #####    #   #####    #      #  ####    #      #####  #    # #    # #    # #    # #   #   #####   ####  
#  ### #        #            #      #      #   #      #      ###### #    # #    # #####  #   #   #           # 
#    # #        #            #      # #    #   #      #      #    #  #  #  #    # #   #  #   #   #      #    # 
 ####  ######   #            ###### #  ####    #      #      #    #   ##    ####  #    # #   #   ######  ####  
 */

router.get("/favorites", (req, res) => {
	Workart.findById()
		.then((userFavorite) => {
			res.json({ userFavorite });
		})
		.catch((error) => {
			res
				.status(401)
				.json({ errorMessage: "User doesn't have any authorisation" });
		});
});

/*                                                                                                               
#####  #    # #####            ##   #####  #####     ######   ##   #    #  ####  #####  # ##### ######  ####  
#    # #    #   #             #  #  #    # #    #    #       #  #  #    # #    # #    # #   #   #      #      
#    # #    #   #   #####    #    # #    # #    #    #####  #    # #    # #    # #    # #   #   #####   ####  
#####  #    #   #            ###### #    # #    #    #      ###### #    # #    # #####  #   #   #           # 
#      #    #   #            #    # #    # #    #    #      #    #  #  #  #    # #   #  #   #   #      #    # 
#       ####    #            #    # #####  #####     #      #    #   ##    ####  #    # #   #   ######  ####  
*/

//put -> update
// it worked with the router.post
router.put("/add/:workartId/favorite", (req, res) => {
	const { workart } = req.params.workartId;
	console.log("WORKART =>>", req.params.workartId);
	console.log("user in session", req.session.user);
	if (!req.session.user) {
		res
			.status(401)
			//quand user n'est pas loggé :

			.json({ errorMessage: "User doesn't have any authorisation" });
	}
	if (!req.params.workartId) {
		res.status(401).json({ errorMessage: "Workart error" });
	}

	User.findByIdAndUpdate(
		{ _id: req.session.user._id },
		{ $push: { favorites: mongoose.Types.ObjectId(req.params.workartId) } },
		{ new: true }
	)
		// need to add the variable "favorites"
		.populate("favorites")
		.then((updatedUser) => {
			res.json({ updatedUser });
		})
		.catch((error) => {
			res.status(500).json({ errorMessage: error.message });
		});
});

/*                                                                                                                                  
#####  #    # #####          #####  ###### #      ###### ##### ######    ######   ##   #    #  ####  #####  # ##### ######  ####  
#    # #    #   #            #    # #      #      #        #   #         #       #  #  #    # #    # #    # #   #   #      #      
#    # #    #   #   #####    #    # #####  #      #####    #   #####     #####  #    # #    # #    # #    # #   #   #####   ####  
#####  #    #   #            #    # #      #      #        #   #         #      ###### #    # #    # #####  #   #   #           # 
#      #    #   #            #    # #      #      #        #   #         #      #    #  #  #  #    # #   #  #   #   #      #    # 
#       ####    #            #####  ###### ###### ######   #   ######    #      #    #   ##    ####  #    # #   #   ######  ####  
*/

router.put("/delete/:workartId/favorite", (req, res) => {
	const { workart } = req.params.workartId;
	console.log("WORKART =>>", req.params.workartId);
	console.log("user in session", req.session.user);
	if (!req.session.user) {
		res
			.status(401)
			.json({ errorMessage: "User doesn't have any authorisation" });
	}
	if (!req.params.workartId) {
		res.status(401).json({ errorMessage: "Workart error" });
	}
	User.findByIdAndUpdate(
		{ _id: req.session.user._id },
		{ $pull: { favorites: mongoose.Types.ObjectId(req.params.workartId) } },
		{ new: true }
	)
		.then((updatedUser) => {
			res.json({ updatedUser });
		})
		.catch((error) => {
			res.status(500).json({ errorMessage: error.message });
		});
});

/*
//params
router.put("/delete/favorite", (req, res) => {
	Workart.findByIdAndRemove(req.params.id)
		.then(() => {
			res.json({
				message: `Task with ${req.params.id} is removed successfully.`,
			});
		})
		.catch((error) => {
			res.status().json({ errorMessage: "Error on deleting workart" });
		});
});
*/

module.exports = router;

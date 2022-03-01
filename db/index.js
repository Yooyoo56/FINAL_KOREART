// ℹ️ package responsible to make the connection with mongodb
// https://www.npmjs.com/package/mongoose
const mongoose = require("mongoose");

// take the model for the mongodb
const Artist = require("../models/Artist.model");
const Workart = require("../models/Workart.model");

// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

const MONGO_URI = require("../utils/consts");

mongoose
	.connect(MONGO_URI)
	.then((x) => {
		console.log(
			`Connected to Mongo! Database name: "${x.connections[0].name}"`
		);
	})
	.catch((err) => {
		console.error("Error connecting to mongo: ", err);
	});
/*
//creation of the artists on MongoDB
const artists = [
	{
		name: "Do Ho Suh",
		city: "New York",
		description:
			"Do Ho Suh (hangul: 서도호, born 1962) is a Korean sculptor and installation artist. He also works across various media, including paintings and film which explores the concept of space and home. His work is particularly well known in relation to anti-monumentalism. His works convey his life experiences, including the homes he has lived in and the diversity of the people he has met.",
		image:
			"https://uploads3.wikiart.org/00262/images/do-ho-suh/cf016119.jpg!Portrait.jpg",
	},
	{
		name: "Jeongmoon Choi",
		city: "Berlin",
		description:
			"Jeongmoon Choi is a Korean-born, Germany-based artist living and working between Seoul and Berlin, known for creating arresting installations from colored wool and UV light. Jeongmoon Choi’s artistic diversity speaks for itself. Her remarkable installations have always been a subject of fascination, especially considering that her artwork has the ability to transform any environment, maximize any room, and wash away or carefully define all of the edges.",
		image:
			"http://pointcontemporain.com/wp-content/uploads/2020/04/jeongmoon_choi-le_pouls_de_la_terre-frac_alsace-5.jpg",
	},
	{
		name: "JeeYoung Lee",
		city: "Seoul",
		description:
			"JeeYoung Lee (Korean: 이지영; born 1983) is a South Korean visual artist. She graduated from Hongik University in Seoul and received the Sovereign Art Prize in 2012.[1] Her photographs are held in the Kyoto Photographic Museum in Japan, the Incheon Foundation for Art and Culture, and Seouls OCI Museum. Lee is known for her surreal images, which she creates by physically transforming her studio space into intricate and imaginative dreamscapes using hand-constructed props and then photographing them without digital manipulation.[3] Restrained by conventional photography medium, Lee added plastic creativity and theatrical performance to it.[4]",
		image:
			"https://forcreativegirls.com/contents/uploads/2020/08/Jeeyoung-Lee_profile.jpg",
	},
	{
		name: "Ham Jin",
		city: "Seoul",
		description:
			"Ham Jin is a contemporary Korean visual artist who was born in 1978. Ham Jin has had several gallery and museum exhibitions, including at the Shin Gallery. Many works by the artist have been sold at auction, including BOY FLYING A FLY (SCULPTURE AND PHOTOGRAPH) sold at Sothebys New York Contemporary Art Asia: China Japan Korea in 2006 for 20,400$. There have been many articles about Ham Jin, including 10 Opening Exhibitions to Watch written for MutualArt in 2015.",
		image:
			"https://amuraworld.com/images/articles/131-corea-del-sur/122-arte-experimental/138-ham-jin.jpg",
	},
];

const workarts = [
	{
		name: "Reflection",
		artist: mongoose.Types.ObjectId("620ea8b3700e3db10238b18a"),
		image: "https://uploads4.wikiart.org/images/do-ho-suh/reflection-2004.jpg",
		type: "Ceramique",
		price_workart: {
			value: 20000,
			currency: "EUR",
		},
		description: "2004",
	},
	{
		name: "Karma",
		artist: mongoose.Types.ObjectId("620ea8b3700e3db10238b18a"),
		image: "https://uploads8.wikiart.org/images/do-ho-suh/karma-2003.jpg",
		type: "Ceramique",
		price_workart: {
			value: 30000,
			currency: "EUR",
		},
		description: "2003",
	},
	{
		name: "The Pulse of the Earth",
		artist: mongoose.Types.ObjectId("620ea8b3700e3db10238b18b"),
		image:
			"http://pointcontemporain.com/wp-content/uploads/2020/04/jeongmoon_choi-le_pouls_de_la_terre-frac_alsace-4.jpg",
		type: "NFT",
		price_workart: {
			value: 40000,
			currency: "EUR",
		},
		description: "2020",
	},
	{
		name: "Dialogue linéaire IV",
		artist: mongoose.Types.ObjectId("620ea8b3700e3db10238b18b"),
		image:
			"https://medias.slash-paris.com/media_attachments/images/000/006/286/Jeongmoon_Choi_Dialogue_line_aire_IV_2012_Fil_bleu_sur_papier_21_x_29_7_cm_large.jpg",
		type: "Painting",
		price_workart: {
			value: 40000,
			currency: "EUR",
		},
		description: "2012",
	},
	{
		name: "Gamer",
		artist: mongoose.Types.ObjectId("620ea8b3700e3db10238b18c"),
		image:
			"https://artlogic-res.cloudinary.com/w_1200,c_limit,f_auto,fl_lossy,q_auto/artlogicstorage/echoecho/images/view/8a03e618521ec9658c53850f65b8a9b9/echofinearts-jeeyoung-lee-gamer-2011.jpg",
		type: "NFT",
		price_workart: {
			value: 25000,
			currency: "EUR",
		},
		description: "2011",
	},
	{
		name: "Resurrection",
		artist: mongoose.Types.ObjectId("620ea8b3700e3db10238b18c"),
		image:
			"http://www.lense.fr/wp-content/uploads/2013/12/JYL002-JeeYoungLEE-OPIOM-resurrection_120x96cm_Inkjet-print_2011.jpg",
		type: "NFT",
		price_workart: {
			value: 10000,
			currency: "EUR",
		},
		description: "2011",
	},
	{
		name: "aewan #1019",
		artist: mongoose.Types.ObjectId("620ea8b3700e3db10238b18d"),
		image:
			"https://static.designboom.com/weblog/images/images_2/lara/818_images/ham_jin/ham_jin_02.jpg",
		type: "Painting",
		price_workart: {
			value: 3000,
			currency: "EUR",
		},
		description: "2004",
	},
	{
		name: "Yellow Pieces",
		artist: mongoose.Types.ObjectId("620ea8b3700e3db10238b18d"),
		image:
			"https://d7hftxdivxxvm.cloudfront.net/?resize_to=fit&width=200&height=149&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FmauvIOVfr_1MoEQlzJPRwA%2Flarge.jpg",
		type: "Ceramique",
		price_workart: {
			value: 8000,
			currency: "EUR",
		},
		description: "2013",
	},
];

//createn the artists
Artist.create(artists)
	.then(function (artistsDB) {
		console.log(`${artistsDB.length} Artists have been created! 🥳`);
	})
	.catch((err) => {
		console.log("Error! during the creation of the artists DB");
		console.log("Error ==========>", err);
		next(err);
	});

//createn the artists
Workart.create(workarts)
	.then(function (workartsDB) {
		console.log(`${workartsDB.length} Workarts have been created! 🥳`);
	})
	.catch((err) => {
		console.log("Error! during the creation of the workarts DB");
		console.log("Error ==========>", err);
		next(err);
	});
*/

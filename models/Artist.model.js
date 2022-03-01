const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const artistSchema = new Schema(
	{
		workart: [{ type: Schema.Types.ObjectId, ref: "Workart" }],
		name: {
			type: String,
			// unique: true -> Ideally, should be unique, but its up to you
		},
		city: String,
		description: String,
		image: String, //photo d'artiste
	},
	{
		// this second object adds extra properties: `createdAt` and `updatedAt`
		timestamps: true,
	}
);

const Artist = model("Artist", artistSchema);

module.exports = Artist;

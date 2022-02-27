const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const workartSchema = new Schema(
	{
		name: String,
		artist: { type: Schema.Types.ObjectId, ref: "Artist", required: true },
		image: String,
		type: {
			type: String,
			enum: [
				"Painting",
				"Ceramique",
				"NFT",
				"Immersive installation",
				"Drawing",
			],
		},
		price_workart: {
			value: Number,
			currency: String,
		},
		description: String,
	},

	{
		// this second object adds extra properties: `createdAt` and `updatedAt`
		timestamps: true,
	}
);

const Workart = model("Workart", workartSchema);

module.exports = Workart;

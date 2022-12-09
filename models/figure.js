const mongoose = require("mongoose");

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGODB_URI);

const figureSchema = new mongoose.Schema({
	imageID: {
		required: true,
		type: Number
	},
	name: {
		required: true,
		type: String
	},
	url: {
		required: true,
		type: String
	},
	doi: {
		required: true,
		type: String
	},
	year: {
		required: true,
		type: Number
	}
})

module.exports = mongoose.model("Figure", figureSchema);



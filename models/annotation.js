const mongoose = require("mongoose");

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGODB_URI);

const annotationSchema = new mongoose.Schema({
	imageID: {
		required: true,
		type: Number
	},
	type: {
		required: true,
		type: String
	},
	usage: {
		required: true,
		type: String
	},
	legend: {
		required: true,
		type: String
	},
	mappingtype: {
		required: true,
		type: String
	},
	amount: {
		required: true,
		type: String
	},
	difficulty: {
		required: true,
		type: Number
	}
});

module.exports = mongoose.model("Annotation", annotationSchema);
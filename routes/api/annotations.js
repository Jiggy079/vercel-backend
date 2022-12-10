const { Router } = require('express');
const Annotation = require("../../models/annotation");


const r = Router();

r.get("/annotations/:index", async function (req, res) {
	try {
		const data = await Annotation.find({imageID: parseInt(req.params.index)});
		res.json(data);
	} catch (error) {
		res.status(500).json({message: error.message});
	}
});

// r.post("/annotations/:index", async function (req, res) {
// 	try {
//
// 	} catch (error) {
// 		res.status(500).json({message: error.message});
// 	}
// });

module.exports = r;
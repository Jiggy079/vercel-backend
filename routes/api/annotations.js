const { Router } = require('express');
const Annotation = require("../../models/annotation");
const { SuccessResponseObject } = require('../../common/http');


const r = Router();

r.get("/annotations/:index", async function (req, res) {
	try {
		const data = await Annotation.find({imageID: parseInt(req.params.index)});
		res.json(data);
	} catch (error) {
		res.status(500).json({message: error.message});
	}
});

r.post("/annotations/:index", async function (req, res) {
	try {
		const filter = {imageID: parseInt(req.params.index)};
		const newData = req.body;
		const doc = await Annotation.findOneAndUpdate(filter, newData, {new: true});
		res.json(new SuccessResponseObject("sucessfully updated", doc));
	} catch (error) {
		res.status(500).json({message: error.message});
	}
});

module.exports = r;
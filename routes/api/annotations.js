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
		const newData = req.body;
		const data = await Annotation.find({imageID: parseInt(req.params.index)}).exec();
		data.type = newData["type"];
		data.usage = newData["usage"];
		data.legend = newData["legend"];
		data.mappingtype = newData["mappingtype"];
		data.amount = newData["amount"];
		data.difficulty = newData["difficulty"];
		data.then((doc) => doc.save());
		res.json(new SuccessResponseObject("sucessfully updated", data));
	} catch (error) {
		res.status(500).json({message: error.message});
	}
});

module.exports = r;
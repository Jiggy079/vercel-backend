const { Router } = require('express');
const Figure = require("../../models/figure");
const { SuccessResponseObject } = require('../../common/http');

const r = Router();

r.get("/figures/:index", async function (req, res) {
	try {
		const data = await Figure.find({imageID: parseInt(req.params.index)});
		res.json(new SuccessResponseObject(req.params.index, [data["name"], data["url"], data["doi"], data["year"]]));
	} catch (error) {
		res.status(500).json({message: error.message});
	}
});

module.exports = r;
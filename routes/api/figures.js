const { Router } = require('express');
const Figure = require("../../models/figure");
const { SuccessResponseObject } = require('../../common/http');

const r = Router();

r.get("/figures/:index", async function (req, res) {
	try {
		const data = await Figure.find({imageId: parseInt(req.params.index)});
		res.json(new SuccessResponseObject(" ", data));
	} catch (error) {
		res.status(500).json({message: error.message});
	}
});

module.exports = r;
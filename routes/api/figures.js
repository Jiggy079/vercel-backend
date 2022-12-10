const { Router } = require('express');
const Figure = require("../../models/figure");

const r = Router();

r.get("/figures/:index", async function (req, res) {
	try {
		const data = await Figure.find({imageId: 1});
		res.json(data);
	} catch (error) {
		res.status(500).json({message: error.message});
	}
});

module.exports = r;
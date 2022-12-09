const { Router } = require('express');
const dbo = require("../../db/conn");

const r = Router();

r.get("/figures", async function (req, res) {
	const dbConnect = dbo.getDB();
	dbConnect
		.collection("figures")
		.find({})
		.toArray(function (err, result) {
			if (err) {
				res.status(400).send("Error fetching figures.");
			} else {
				res.json(result);
			}
		});
});
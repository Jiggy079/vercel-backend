const { Router } = require('express');
const { SuccessResponseObject } = require('../common/http');
const demo = require('./demo.route');
const figures = require("./api/figures");
const annotations = require("./api/annotations");

const r = Router();

r.use('/demo', demo);
r.use("/api", figures);
r.use("/api", annotations);

r.get('/', (req, res) => res.json(new SuccessResponseObject('express vercel boiler plate')));


module.exports = r;

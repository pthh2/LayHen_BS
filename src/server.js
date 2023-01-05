//import express from "express";
//import bodyParser from "body-parser";// ho tro lay tham so tu client
//import viewEngine from "./config/viewEngine";

const initWebRoutes = require('./route/web');
const viewEngine = require('./config/viewEngine');
const bodyParser = require('body-Parser');
const express = require('express');
require('dotenv').config();

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
viewEngine(app);
initWebRoutes(app);
let port = process.env.PORT || 8989;

app.listen(port, () => {
    console.log("Backend nodejs is running on the port:" + port)
})
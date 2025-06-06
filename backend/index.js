"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cors_1 = require("cors");
var dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
var app = (0, express_1.default)();
var port = process.env.PORT || 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/api", function (req, res) {
    res.send("Welcome to the backend server!");
});
app.listen(port, function () {
    console.log("Backend server running at http://localhost:".concat(port));
});

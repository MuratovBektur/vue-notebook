"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var record_controller_1 = __importDefault(require("../controllers/record.controller"));
var recordRoute = express_1["default"].Router();
recordRoute.get("/", function (req, res) {
    res.json("recordRoute");
});
recordRoute.get("/all", record_controller_1["default"].getAllRecord);
recordRoute.get("/remove", record_controller_1["default"].removeById);
exports["default"] = recordRoute;

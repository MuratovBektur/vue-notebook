import express from "express";
import recordController from "../controllers/record.controller";

const recordRoute = express.Router();

recordRoute.get("/", (req, res) => {
  res.json("recordRoute");
});
recordRoute.get("/all", recordController.getAllRecord);
recordRoute.get("/remove", recordController.removeById);

export default recordRoute;

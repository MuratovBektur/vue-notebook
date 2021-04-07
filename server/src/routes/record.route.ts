import express from "express";
import recordController from "../controllers/record.controller";

const recordRoute = express.Router();

recordRoute.get("/", (req, res) => {
  res.json("recordRoute");
});
recordRoute.get("/all", recordController.getAllRecord);
recordRoute.get("/:id", recordController.getById);
recordRoute.post("/add", recordController.addRecord);
recordRoute.put("/edit", recordController.editRecord);
recordRoute.delete("/remove/:id", recordController.removeById);

export default recordRoute;

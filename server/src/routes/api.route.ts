import express from "express";

import recordRoute from "./record.route";

const apiRouter = express.Router();

apiRouter.use("/record", recordRoute);

apiRouter.get("/", (req, res) => {
  res.json("api");
});

export default apiRouter;

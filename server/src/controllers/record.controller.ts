import express from "express";

import recordModel from "../models/record.model";

class RecordController {
  async getAllRecord(req: express.Request, res: express.Response) {
    return res.json(await recordModel.getAll());
  }
  removeById(req: express.Request, res: express.Response) {
    return res.json(recordModel.removeById());
  }
}

export default new RecordController();

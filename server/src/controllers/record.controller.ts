import express from "express";

import recordModel from "../models/record.model";

class RecordController {
  async getAllRecord(req: express.Request, res: express.Response) {
    return res.json(await recordModel.getAll());
  }
  async getById(req: express.Request, res: express.Response) {
    const id: string = req.params.id;

    const data = JSON.parse(await recordModel.getById(id));
    if (!data.success) {
      if (data.reason?.message === "Can't found record with received id") {
        return res.status(400).json(data);
      }
      return res.status(500).json(data);
    }
    return res.json(data);
  }

  async addRecord(req: express.Request, res: express.Response) {
    const record: { title: string; text: string } = req.body;
    // return res.status(201).json(await recordModel.addRecord(record));
    const data = JSON.parse(await recordModel.addRecord(record));
    if (!data.success) {
      return res.status(500).json(data);
    }
    return res.status(201).json(data);
  }

  async editRecord(req: express.Request, res: express.Response) {
    const record: { id: string; title: string; text: string } = req.body;
    const data = JSON.parse(await recordModel.editRecord(record));
    if (!data.success) {
      if (data.reason?.message === "Can't found record with received id") {
        return res.status(400).json(data);
      }
      return res.status(500).json(data);
    }
    return res.json(data);
  }

  async removeById(req: express.Request, res: express.Response) {
    const id: string = req.params.id;
    const data = JSON.parse(await recordModel.removeById(id));
    if (!data.success) {
      if (data.reason?.message === "Can't found record with received id") {
        return res.status(400).json(data);
      }
      return res.status(500).json(data);
    }
    return res.json(data);
  }
}

export default new RecordController();

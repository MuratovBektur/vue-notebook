// const mongoose = require("mongoose");
import mongoose from "mongoose";
const Schema = mongoose.Schema;

interface IRecord {
  _id: string;
  title: string;
  text: string;
}

// function connectMongoose() {
mongoose.connect(
  "mongodb+srv://qwerty:qwerty123456@cluster0.cnzri.mongodb.net/it-ontime",
  { useUnifiedTopology: true, useNewUrlParser: true }
);
mongoose.set("useFindAndModify", false);

process.on("SIGINT", function () {
  mongoose.connection.close(function () {
    console.log("Mongoose disconnected on app termination");
    process.exit(0);
  });
});

const recordScheme = new Schema(
  { title: String, text: String },
  { versionKey: false }
);

recordScheme.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});
const Record = mongoose.model("record", recordScheme);

class RecordModel {
  async getAll(): Promise<IRecord[]> {
    try {
      // await connectMongoose();
      let docs: any | IRecord[] = await Record.find({});
      // mongoose.disconnect();
      return docs;
    } catch (e) {
      console.error(e);
    }
  }

  async getById(id: string): Promise<string> {
    try {
      console.log("id", id);
      let doc: any = await Record.findOne({ _id: id });
      if (doc === null) {
        return JSON.stringify({
          success: false,
          reason: {
            message: `Can't found record with received id`,
          },
        });
      }
      return JSON.stringify({
        success: true,
        record: doc,
      });
    } catch (e) {
      console.error(e);
      return JSON.stringify({
        success: false,
        reason: e,
      });
    }
  }

  async addRecord(record: { title: string; text: string }): Promise<string> {
    try {
      // await connectMongoose();
      let doc: any = await Record.create(record);
      console.log("result", doc, record);
      // mongoose.disconnect();
      return JSON.stringify({
        success: true,
        record: doc,
      });
    } catch (e) {
      console.error(e);
      return JSON.stringify({
        success: false,
        reason: e,
      });
    }
  }

  async editRecord({
    id,
    title,
    text,
  }: {
    id: string;
    title: string;
    text: string;
  }) {
    try {
      let doc = await Record.findByIdAndUpdate(id, { title, text });
      if (doc === null) {
        return JSON.stringify({
          success: false,
          reason: {
            message: `Can't found record with received id`,
          },
        });
      }
      return JSON.stringify({
        success: true,
        removedRecord: doc,
      });
    } catch (e) {
      console.error(e);
      return JSON.stringify({
        success: false,
        reason: e,
      });
    }
  }

  async removeById(id: string): Promise<string> {
    try {
      // await connectMongoose();
      let doc = await Record.findByIdAndDelete(id);
      // mongoose.disconnect();
      if (doc === null) {
        return JSON.stringify({
          success: false,
          reason: {
            message: `Can't found record with received id`,
          },
        });
      }
      return JSON.stringify({
        success: true,
        removedRecord: doc,
      });
    } catch (e) {
      console.error(e);
      return JSON.stringify({
        success: false,
        reason: e,
      });
    }
  }
}

export default new RecordModel();

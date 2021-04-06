// const mongoose = require("mongoose");
import mongoose from "mongoose";
const Schema = mongoose.Schema;

function connectMongoose() {
  mongoose.connect(
    "mongodb+srv://qwerty:qwerty123456@cluster0.cnzri.mongodb.net/it-ontime",
    { useUnifiedTopology: true, useNewUrlParser: true }
  );
}

process.on("SIGINT", function () {
  mongoose.connection.close(function () {
    console.log("Mongoose disconnected on app termination");
    process.exit(0);
  });
});

const recordScheme = new Schema(
  { title: String, text: String }
  //   { versionKey: false }
);

recordScheme.virtual("id").get(function () {
  return this._id.toHexString();
});

// Ensure virtual fields are serialised.
recordScheme.set("toJSON", {
  virtuals: true,
});
const Record = mongoose.model("record", recordScheme);

class RecordModel {
  getAll() {
    try {
      connectMongoose();
      return Record.find({})
        .then((docs) => {
          console.log("docs", docs);
          mongoose.disconnect();
          return docs;
        })
        .catch((e) => {
          throw e;
        });
    } catch (e) {
      console.error(e);
    }
  }
  removeById() {
    try {
      Record.deleteMany({ title: "title2" }, function (err, docs) {
        if (err) return console.log(err);

        console.log(docs);
      });
      return;
    } catch (e) {
      console.error(e);
    }
  }
}

export default new RecordModel();

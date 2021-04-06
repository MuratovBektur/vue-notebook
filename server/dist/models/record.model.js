"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
// const mongoose = require("mongoose");
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1["default"].Schema;
function connectMongoose() {
    mongoose_1["default"].connect("mongodb+srv://qwerty:qwerty123456@cluster0.cnzri.mongodb.net/it-ontime", { useUnifiedTopology: true, useNewUrlParser: true });
}
process.on("SIGINT", function () {
    mongoose_1["default"].connection.close(function () {
        console.log("Mongoose disconnected on app termination");
        process.exit(0);
    });
});
var recordScheme = new Schema({ title: String, text: String }
//   { versionKey: false }
);
recordScheme.virtual("id").get(function () {
    return this._id.toHexString();
});
// Ensure virtual fields are serialised.
recordScheme.set("toJSON", {
    virtuals: true
});
var Record = mongoose_1["default"].model("record", recordScheme);
var RecordModel = /** @class */ (function () {
    function RecordModel() {
    }
    RecordModel.prototype.getAll = function () {
        try {
            connectMongoose();
            return Record.find({})
                .then(function (docs) {
                console.log("docs", docs);
                mongoose_1["default"].disconnect();
                return docs;
            })["catch"](function (e) {
                throw e;
            });
        }
        catch (e) {
            console.error(e);
        }
    };
    RecordModel.prototype.removeById = function () {
        try {
            Record.deleteMany({ title: "title2" }, function (err, docs) {
                if (err)
                    return console.log(err);
                console.log(docs);
            });
            return;
        }
        catch (e) {
            console.error(e);
        }
    };
    return RecordModel;
}());
exports["default"] = new RecordModel();

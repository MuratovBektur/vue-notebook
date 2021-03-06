"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var record_model_1 = __importDefault(require("../models/record.model"));
var RecordController = /** @class */ (function () {
    function RecordController() {
    }
    RecordController.prototype.getAllRecord = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = res).json;
                        return [4 /*yield*/, record_model_1["default"].getAll()];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    RecordController.prototype.getById = function (req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var id, data, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        id = req.params.id;
                        _c = (_b = JSON).parse;
                        return [4 /*yield*/, record_model_1["default"].getById(id)];
                    case 1:
                        data = _c.apply(_b, [_d.sent()]);
                        if (!data.success) {
                            if (((_a = data.reason) === null || _a === void 0 ? void 0 : _a.message) === "Can't found record with received id") {
                                return [2 /*return*/, res.status(400).json(data)];
                            }
                            return [2 /*return*/, res.status(500).json(data)];
                        }
                        return [2 /*return*/, res.json(data)];
                }
            });
        });
    };
    RecordController.prototype.addRecord = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var record, data, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        record = req.body;
                        _b = (_a = JSON).parse;
                        return [4 /*yield*/, record_model_1["default"].addRecord(record)];
                    case 1:
                        data = _b.apply(_a, [_c.sent()]);
                        if (!data.success) {
                            return [2 /*return*/, res.status(500).json(data)];
                        }
                        return [2 /*return*/, res.status(201).json(data)];
                }
            });
        });
    };
    RecordController.prototype.editRecord = function (req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var record, data, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        record = req.body;
                        _c = (_b = JSON).parse;
                        return [4 /*yield*/, record_model_1["default"].editRecord(record)];
                    case 1:
                        data = _c.apply(_b, [_d.sent()]);
                        if (!data.success) {
                            if (((_a = data.reason) === null || _a === void 0 ? void 0 : _a.message) === "Can't found record with received id") {
                                return [2 /*return*/, res.status(400).json(data)];
                            }
                            return [2 /*return*/, res.status(500).json(data)];
                        }
                        return [2 /*return*/, res.json(data)];
                }
            });
        });
    };
    RecordController.prototype.removeById = function (req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var id, data, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        id = req.params.id;
                        _c = (_b = JSON).parse;
                        return [4 /*yield*/, record_model_1["default"].removeById(id)];
                    case 1:
                        data = _c.apply(_b, [_d.sent()]);
                        if (!data.success) {
                            if (((_a = data.reason) === null || _a === void 0 ? void 0 : _a.message) === "Can't found record with received id") {
                                return [2 /*return*/, res.status(400).json(data)];
                            }
                            return [2 /*return*/, res.status(500).json(data)];
                        }
                        return [2 /*return*/, res.json(data)];
                }
            });
        });
    };
    return RecordController;
}());
exports["default"] = new RecordController();

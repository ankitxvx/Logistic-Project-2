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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const driver_1 = __importDefault(require("../models/driver"));
const router = express_1.default.Router();
router.get('/alldriver', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const driver = yield driver_1.default.find();
        res.json(driver);
    }
    catch (err) {
        res.status(400).json('Error: ' + err);
    }
}));
router.get('/driver/:code', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const driver = yield driver_1.default.find({ vehicleCode: req.params.code });
        res.json(driver);
    }
    catch (err) {
        res.status(400).json('Error: ' + err);
    }
}));
router.post('/adddriver', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { sn, vehicleType, driverName, vehicleCode, vehicleNumber, driverPhone } = req.body;
    const newDriver = new driver_1.default({
        sn,
        vehicleType,
        driverName,
        vehicleCode,
        vehicleNumber,
        driverPhone
    });
    try {
        yield newDriver.save();
        res.json('Driver added!');
    }
    catch (err) {
        res.status(400).json('Error: ' + err);
    }
}));
exports.default = router;

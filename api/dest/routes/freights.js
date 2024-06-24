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
const freight_1 = __importDefault(require("../models/freight"));
const router = express_1.default.Router();
router.get('/allfreight', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const freight = yield freight_1.default.find();
        res.json(freight);
    }
    catch (err) {
        res.status(400).json('Error: ' + err);
    }
}));
router.post('/addfreight', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { vehicleType, distance, totalKm, driverFreight, overLimitTripPrice, customerTripPrice, overLimitPrice, minTime, maxTime } = req.body;
    const newFreight = new freight_1.default({
        vehicleType, distance, totalKm, driverFreight, overLimitTripPrice, customerTripPrice, overLimitPrice, minTime, maxTime
    });
    try {
        yield newFreight.save();
        res.json('Freight added!');
    }
    catch (err) {
        res.status(400).json('Error: ' + err);
    }
}));
router.get('/freights/:vtype', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const freight = yield freight_1.default.find({ vehicleType: req.params.vtype });
        res.json(freight);
    }
    catch (err) {
        res.status(400).json('Error: ' + err);
    }
}));
// router.get('/freights/:vtype', async (req: Request, res: Response) => {
//     try{
//         const freight = await Freight.find({vehicleType: req.params.vtype});
//         res.json(freight);
//     } catch(err){
//         res.status(400).json('Error: ' + err);
//     }
// });
router.get('//freights/:vtype', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("getVehicleByCode");
        const vehicleCode = req.params.vehicleCode;
        const vehicle = yield freight_1.default.findOne({ vehicleCode: vehicleCode });
        if (!vehicle) {
            return res.status(404).json({ message: "Vehicle not found" });
        }
        res.status(200).json(vehicle);
    }
    catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
}));
exports.default = router;

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
exports.getVehicleByCode = exports.addVehicle = void 0;
const vehicleModel_1 = __importDefault(require("../models/vehicleModel"));
const addVehicle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { vehicleCode, vehicleType, vehicleNumber, driverName, driverContactNo, vehicleOwner, basePrices, } = req.body;
        const newVehicle = new vehicleModel_1.default({
            vehicleCode,
            vehicleType,
            vehicleNumber,
            driverName,
            driverContactNo,
            vehicleOwner,
            basePrices,
        });
        yield newVehicle.save();
        res.status(201).json({ message: 'Vehicle added successfully', vehicle: newVehicle });
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error: error });
    }
});
exports.addVehicle = addVehicle;
// Controller to get vehicle by code
const getVehicleByCode = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('getVehicleByCode');
        const vehicleCode = req.params.code;
        const vehicle = yield vehicleModel_1.default.findOne({ vehicleCode: vehicleCode });
        if (!vehicle) {
            return res.status(404).json({ message: 'Vehicle not found' });
        }
        res.status(200).json(vehicle);
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});
exports.getVehicleByCode = getVehicleByCode;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const entrySchema = new mongoose_1.Schema({
    loadingNumber: { type: Number, required: false },
    vehicleCode: { type: String, required: false },
    vehicleType: { type: String, required: false },
    vehicleNumber: { type: String, required: false },
    driverName: { type: String, required: false },
    driverNumber: { type: String, required: false },
    distance: { type: String, required: false },
    overloaded: { type: String, required: false },
    driverFreight: { type: String, required: false },
    customerFreight: { type: String, required: false },
    arrangedBy: { type: String, required: false },
});
const Entry = (0, mongoose_1.model)('Entry', entrySchema);
exports.default = Entry;

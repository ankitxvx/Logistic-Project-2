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
const entries_1 = __importDefault(require("../models/entries"));
const router = express_1.default.Router();
// Fetch all entries
router.get('/allentries', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const entries = yield entries_1.default.find();
        res.json(entries);
    }
    catch (err) {
        res.status(400).json({ message: 'Error fetching entries', error: err });
    }
}));
// Add a new entry
router.post('/addentry', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { vehicleCode, vehicleType, vehicleNumber, driverName, driverNumber, distance, overloaded, driverFreight, customerFreight, arrangedBy } = req.body;
    try {
        // Find the latest entry to get the last loadingNumber
        const lastEntry = yield entries_1.default.findOne().sort({ loadingNumber: -1 });
        let loadingNumber = lastEntry ? lastEntry.loadingNumber + 1 : 1;
        // Reset loadingNumber if it exceeds 500
        if (loadingNumber > 500) {
            loadingNumber = 1;
        }
        const newEntry = new entries_1.default({
            loadingNumber,
            vehicleCode,
            vehicleType,
            vehicleNumber,
            driverName,
            driverNumber,
            distance,
            overloaded,
            driverFreight,
            customerFreight,
            arrangedBy,
        });
        yield newEntry.save();
        res.json({ message: 'Entry added!' });
    }
    catch (err) {
        res.status(400).json({ message: 'Error adding entry', error: err });
    }
}));
// Fetch a specific entry by ID
router.get('/entry/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const entry = yield entries_1.default.findById(req.params.id);
        if (!entry) {
            return res.status(404).json({ message: 'Entry not found' });
        }
        res.json(entry);
    }
    catch (err) {
        res.status(400).json({ message: 'Error fetching entry', error: err });
    }
}));
// Delete a specific entry by ID
router.delete('/deleteentry/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const entry = yield entries_1.default.findByIdAndDelete(req.params.id);
        if (!entry) {
            return res.status(404).json({ message: 'Entry not found' });
        }
        res.json({ message: 'Entry deleted!' });
    }
    catch (err) {
        res.status(400).json({ message: 'Error deleting entry', error: err });
    }
}));
exports.default = router;

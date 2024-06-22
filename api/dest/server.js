"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const vehicles_1 = __importDefault(require("./routes/vehicles"));
const app = (0, express_1.default)();
const port = 5000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const uri = 'mongodb://localhost:27017/lohawala';
mongoose_1.default.connect(uri)
    .then(() => {
    console.log('MongoDB database connection established successfully');
})
    .catch(err => {
    console.error('MongoDB connection error:', err);
});
app.use('/vehicles', vehicles_1.default);
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

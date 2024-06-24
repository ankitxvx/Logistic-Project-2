"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const vehicles_1 = __importDefault(require("./routes/vehicles"));
const freights_1 = __importDefault(require("./routes/freights"));
const drivers_1 = __importDefault(require("./routes/drivers"));
const app = (0, express_1.default)();
const port = 5000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Hello World!');
});
const uri = 'mongodb://Admin:lohawala_mongo123@52.66.12.20:27017';
mongoose_1.default.connect(uri)
    .then(() => {
    console.log('MongoDB database connection established successfully');
})
    .catch(err => {
    console.error('MongoDB connection error:', err);
});
app.use(express_1.default.json());
app.use('/vehicles', vehicles_1.default);
app.use('/freights', freights_1.default);
app.use('/drivers', drivers_1.default);
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

import mongoose, { Document, Schema } from 'mongoose';

export interface IDriver extends Document {
    sn: string;
    vehicleType: string;
    driverName: string;
    vehicleCode: string;
    vehicleNumber: string;
    driverPhone: number;
}

const driverSchema = new Schema({
    sn: { type: String },
    vehicleType: { type: String, required: true },
    driverName: { type: String, required: true },
    vehicleCode: { type: String, required: true },
    vehicleNumber: { type: String, required: true },
    driverPhone: { type: Number, required: true },
})

const Driver = mongoose.model<IDriver>('Driver', driverSchema);

export default Driver;
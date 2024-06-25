import mongoose, { Document, Schema } from 'mongoose';

export interface ILoading extends Document {
    loadingNumber: number,
    vehicleCode: string,
    vehicleType: string,
    vehicleNumber: string,
    driverName: string,
    driverNumber: number,
    distance: number,
    overloaded: number,
    driverFreight: number,
    customerTripPrice: number,
}

const loadingSchema = new Schema({
    loadingNumber: { type: Number, required: true },
    vehicleCode: { type: String, required: true },
    vehicleType: { type: String, required: true },
    vehicleNumber: { type: String, required: true },
    driverName: { type: String, required: true },
    driverNumber: { type: Number, required: true },
    distance: { type: Number, required: true },
    overloaded: { type: Number, required: true },
    driverFreight: { type: Number, required: true },
    customerTripPrice: { type: Number, required: true },
})

const Loading = mongoose.model<ILoading>('Loading', loadingSchema);

export default Loading;
import mongoose, { Document, Schema } from 'mongoose';

export interface IDistance extends Document {
    distance: number,
    driverFreight: number,
    customerTripPrice: number,
}

const distanceSchema = new Schema({
    distance: { type: Number, required: true },
    driverFreight: { type: Number, required: true },
    customerTripPrice: { type: Number, required: true },

})

const Distance = mongoose.model<IDistance>('Distance', distanceSchema);

export default Distance;
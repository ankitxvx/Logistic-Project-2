import mongoose, { Document, Schema } from 'mongoose';

export interface IVehicle extends Document {
  sn: string;
  vehicleType: string;
  capacity: string;
  kmRange: number;
  numberOfDrivers: number;
}

const vehicleSchema = new Schema({
  sn: { type: String },
  vehicleType: { type: String, required: true },
  capacity: { type: String, required: true },
  kmRange: { type: Number, required: true },
  numberOfDrivers: { type: Number, required: true },
});

const Vehicle = mongoose.model<IVehicle>('Vehicle', vehicleSchema);

export default Vehicle;

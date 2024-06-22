import mongoose, { Document, Schema } from 'mongoose';

export interface IFreight extends Document {
  vehicleType: string;
  distance: number;
  totalKm:number;
  driverFreight:number;
  overLimitTripPrice:number;
  customerTripPrice:number;
  overLimitPrice:number;
  minTime:number;
  maxTime:number;
}

const freightSchema = new Schema({
  vehicleType: { type: String, required: true },
  distance: { type: Number, required: true },
  totalKm: { type: Number, required: true },
  driverFreight: { type: Number, required: true },
  overLimitTripPrice: { type: Number, required: true },
  customerTripPrice: { type: Number, required: true },
  overLimitPrice: { type: Number, required: true },
  minTime: { type: Number, required: true },
  maxTime: { type: Number, required: true },

});

const Freight = mongoose.model<IFreight>('Freight', freightSchema);

export default Freight;

import { Schema, model } from 'mongoose';

const vehicleSchema = new Schema({
  vehicleCode: { type: String, required: true },
  vehicleType: { type: String, required: true },
  vehicleNumber: { type: String, required: true },
  driverName: { type: String, required: true },
  driverContactNo: { type: String, required: true },
  vehicleOwner: { type: String, required: true },
  basePrices: [
    {
      rangeFrom: { type: Number, required: true },
      rangeTo: { type: Number, required: true },
      basePrice: { type: Number, required: true },
      overloadBasePrice: { type: Number, required: true },
      driverBasePrice: { type: Number, required: true },
      customerBasePrice: { type: Number, required: true },
    },
  ],
});

const Vehicle = model('Vehicle', vehicleSchema);

export default Vehicle;

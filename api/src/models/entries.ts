import { Schema, model, Document } from 'mongoose';

interface IEntry extends Document {
 
  loadingNumber: number;
  vehicleCode: string;
  vehicleType: string;
  vehicleNumber: string;
  driverName: string;
  driverNumber: string;
  distance: string;
  overloaded?: string;
  driverFreight: string;
  customerFreight: string;
  arrangedBy?: string;
}

const entrySchema = new Schema<IEntry>({
  loadingNumber: { type:Number, required: false },
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
 
const Entry = model<IEntry>('Entry', entrySchema);
 
export default Entry;
 
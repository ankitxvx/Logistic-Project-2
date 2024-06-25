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
    loadingNumber: { type: Number,  },
    vehicleCode: { type: String,  },
    vehicleType: { type: String,  },
    vehicleNumber: { type: String,  },
    driverName: { type: String,  },
    driverNumber: { type: Number,  },
    distance: { type: Number,  },
    overloaded: { type: Number,  },
    driverFreight: { type: Number,  },
    customerTripPrice: { type: Number,  },
})

const Loading = mongoose.model<ILoading>('Loading', loadingSchema);

export default Loading;
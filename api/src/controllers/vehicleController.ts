import { Request, Response } from 'express';
import Vehicle from '../models/vehicleModel';

export const addVehicle = async (req: Request, res: Response) => {
  try {
    const {
      vehicleCode,
      vehicleType,
      vehicleNumber,
      driverName,
      driverContactNo,
      vehicleOwner,
      basePrices,
    } = req.body;

    const newVehicle = new Vehicle({
      vehicleCode,
      vehicleType,
      vehicleNumber,
      driverName,
      driverContactNo,
      vehicleOwner,
      basePrices,
    });

    await newVehicle.save();

    res.status(201).json({ message: 'Vehicle added successfully', vehicle: newVehicle });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error });
  }
};

// Controller to get vehicle by code
export const getVehicleByCode = async (req: Request, res: Response) => {
  try {
    console.log('getVehicleByCode');
    const vehicleCode = req.params.code;
    const vehicle = await Vehicle.findOne({ vehicleCode: vehicleCode });

    if (!vehicle) {
      return res.status(404).json({ message: 'Vehicle not found' });
    }

    res.status(200).json(vehicle);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

import express, { Request, Response } from 'express';
import Vehicle from '../models/vehicle';

const router = express.Router();

router.get('/allvehicle', async (req: Request, res: Response) => {
  try {
    const vehicles = await Vehicle.find();
    res.json(vehicles);
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

router.post('/addvehicle', async (req: Request, res: Response) => {
  const { sn, vehicleType, capacity, kmRange, numberOfDrivers } = req.body;

  const newVehicle = new Vehicle({
    sn,
    vehicleType,
    capacity,
    kmRange,
    numberOfDrivers,
  });

  try {
    await newVehicle.save();
    res.json('Vehicle added!');
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

export default router;

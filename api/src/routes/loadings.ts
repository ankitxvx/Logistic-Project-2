import express, { Request, Response } from 'express';
import Driver from '../models/driver';
import Loading from '../models/loading';

const router = express.Router();

router.get('/:code', async (req: Request, res: Response) => {
    const vehicleCode = req.params.code;
    try {
        const loading = await Driver.findOne({ vehicleCode });
        if (!loading) {
          return res.status(404).send('Vehicle Code not found');
        }
        res.json(loading);
      } catch (error) {
        res.status(500).send('Server error');
      }
});

router.post('/addloading', async(req:Request, res:Response) => {
  const{
    loadingNumber,
    vehicleCode,
    vehicleType,
    vehicleNumber,
    driverName,
    driverPhone,
    distance,
    overloaded,
    driverFreight,
    customerTripPrice,
  } = req.body;

  const newLoading = new Loading({
    loadingNumber,
    vehicleCode,
    vehicleType,
    vehicleNumber,
    driverName,
    driverPhone,
    distance,
    overloaded,
    driverFreight,
    customerTripPrice,
  });

  try {
    await newLoading.save();
    res.json('Loading added!');
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
})
 
export default router;

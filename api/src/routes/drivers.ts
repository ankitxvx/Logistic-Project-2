import express, { Request, Response } from 'express';
import Driver from '../models/driver';

const router = express.Router();

router.get('/alldriver', async (req: Request, res: Response) => {
    try {
        const driver = await Driver.find();
        res.json(driver);
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

router.post('/adddriver', async (req: Request, res: Response) => {
    const {  sn,
        vehicleType,
        driverName,
        vehicleCode,
        vehicleNumber,
        driverPhone} = req.body;

    const newDriver = new Driver({
        sn,
        vehicleType,
        driverName,
        vehicleCode,
        vehicleNumber,
        driverPhone
    });

    try {
        await newDriver.save();
        res.json('Driver added!');
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

export default router;

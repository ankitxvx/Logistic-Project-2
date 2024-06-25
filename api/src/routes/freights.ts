import express, { Request, Response } from 'express';
import Freight from '../models/freight';

const router = express.Router();

router.get('/allfreight', async (req: Request, res: Response) => {
    try {
        const freight = await Freight.find();
        res.json(freight);
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

router.post('/addfreight', async (req: Request, res: Response) => {
    const { vehicleType, distance, totalKm, driverFreight, overLimitTripPrice, customerTripPrice, overLimitPrice, minTime, maxTime } = req.body;

    const newFreight = new Freight({
        vehicleType, distance, totalKm, driverFreight, overLimitTripPrice, customerTripPrice, overLimitPrice, minTime, maxTime
    });

    try {
        await newFreight.save();
        res.json('Freight added!');
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

router.get('/freights/:vtype', async (req: Request, res: Response) => {
    try{
        const freight = await Freight.find({vehicleType: req.params.vtype});
        res.json(freight);
    } catch(err){
        res.status(400).json('Error: ' + err);
    }
});
 
router.get('/freight/:distance', async (req: Request, res: Response) => {
    try{
        const freight = await Freight.findOne({distance: req.params.distance});
       
        res.json(freight);
    } catch(err){
        res.status(400).json('Error: ' + err);
    }
});

export default router;

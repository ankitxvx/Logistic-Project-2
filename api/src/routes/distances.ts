import express, { Request, Response } from 'express';
import Freight from '../models/freight';

const router = express.Router();

router.get('/:code', async (req: Request, res: Response) => {
    const distance = req.params.code;
    try {
        const distanceCode = await Freight.findOne({ distance });
        if (!distanceCode) {
          return res.status(404).send('Distance not found');
        }
        res.json(distanceCode);
      } catch (error) {
        res.status(500).send('Server error');
      }
});
 
export default router;

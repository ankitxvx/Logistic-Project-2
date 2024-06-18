import express from 'express';
import { addVehicle, getVehicleByCode } from '../controllers/vehicleController';

const router = express.Router();

router.post('/', addVehicle);
router.get('/:code', getVehicleByCode);

export default router;

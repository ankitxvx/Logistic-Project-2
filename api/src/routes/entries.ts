import express, { Request, Response } from 'express';
import Entry from '../models/entries';

const router = express.Router();

// Fetch all entries
router.get('/allentries', async (req: Request, res: Response) => {
    try {
        const entries = await Entry.find();
        res.json(entries);
    } catch (err) {
        res.status(400).json({ message: 'Error fetching entries', error: err });
    }
});

// Add a new entry
router.post('/addentry', async (req: Request, res: Response) => {
    const { vehicleCode, vehicleType, vehicleNumber, driverName, driverNumber, distance, overloaded, driverFreight, customerFreight,arrangedBy } = req.body;

    try {
        // Find the latest entry to get the last loadingNumber
        const lastEntry = await Entry.findOne().sort({ loadingNumber: -1 });
        let loadingNumber = lastEntry ? lastEntry.loadingNumber + 1 : 1;

        // Reset loadingNumber if it exceeds 500
        if (loadingNumber > 500) {
            loadingNumber = 1;
        }

        const newEntry = new Entry({
            loadingNumber,
            vehicleCode,
            vehicleType,
            vehicleNumber,
            driverName,
            driverNumber,
            distance,
            overloaded,
            driverFreight,
            customerFreight,
            arrangedBy,
        });

        await newEntry.save();
        res.json({ message: 'Entry added!' });
    } catch (err) {
        res.status(400).json({ message: 'Error adding entry', error: err });
    }
});

// Fetch a specific entry by ID
router.get('/entry/:id', async (req: Request, res: Response) => {
    try {
        const entry = await Entry.findById(req.params.id);
        if (!entry) {
            return res.status(404).json({ message: 'Entry not found' });
        }
        res.json(entry);
    } catch (err) {
        res.status(400).json({ message: 'Error fetching entry', error: err });
    }
});

// Delete a specific entry by ID
router.delete('/deleteentry/:id', async (req: Request, res: Response) => {
    try {
        const entry = await Entry.findByIdAndDelete(req.params.id);
        if (!entry) {
            return res.status(404).json({ message: 'Entry not found' });
        }
        res.json({ message: 'Entry deleted!' });
    } catch (err) {
        res.status(400).json({ message: 'Error deleting entry', error: err });
    }
});

export default router;

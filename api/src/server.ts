import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import vehicleRoutes from './routes/vehicleRoutes';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://root:root@cluster0.k6x1lr2.mongodb.net/').then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB:', err.message);
});

app.use('/api/vehicles', vehicleRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

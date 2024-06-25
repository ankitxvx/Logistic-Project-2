import express,{Response,Request} from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import vehicleRouter from "./routes/vehicles";
import freightRouter from "./routes/freights";
import driverRouter from "./routes/drivers";
import entryRouter from "./routes/entries";

const app = express();
const port = 5000; 

app.use(cors());
app.use(express.json()); 
app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!');
});

const uri = 'mongodb://Admin:lohawala_mongo123@52.66.12.20:27017';
 
mongoose.connect(uri)
  .then(() => {
    console.log('MongoDB database connection established successfully');
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });

  app.use(express.json());
app.use('/vehicles', vehicleRouter);
app.use('/freights', freightRouter);
app.use('/drivers', driverRouter);
app.use('/entries', entryRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

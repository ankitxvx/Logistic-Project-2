import   React,{useState,useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Loading from './LoadingNumber';
interface Driver {
  sn: string;
  vehicleType: string;
  driverName: string;
  vehicleCode: number;
  vehicleNumber: number;
  driverPhone: number;
}
export default function ComboBox() {
  const [data,setData]  = useState<Driver[]>([]);
  const [code,setCode] = useState<string>('');
  const fetchData = async () => {
    const response = await fetch('http://localhost:5000/drivers/alldriver')
    const driver = await response.json();
    setData(driver);
  }
  const vehicleCodes = data.map((driver) => driver.vehicleCode);
  React.useEffect(() => {
    fetchData();
  }, []);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
   
  };
  return (
    <Autocomplete
      disablePortal
     
      id="combo-box-demo"
      options={vehicleCodes}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Vehicle Code" />}
    />
  );
}

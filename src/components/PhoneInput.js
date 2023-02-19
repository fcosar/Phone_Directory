import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import axios from "axios";

const Phone=()=>{
  // `value` will be the parsed phone number in E.164 format.
  // Example: "+12133734253".
  const [PhoneNumber, setPhoneNumber] = useState("")
  const params = useParams();
  
  useEffect( ()=>{
    axios.get(`http://localhost:3004/person/${params.PhoneNumber}`)
    .then(res=>{
        setPhoneNumber(res.data.PhoneNumber)
    })
    .catch(err=>{
    })
    },[] )
    if(PhoneNumber===null) return null;
  return (
    <PhoneInput
      placeholder="Enter phone number"
      value={PhoneNumber}
      onChange={(event)=>setPhoneNumber(event.target.value)}/>
  )
}
export default PhoneInput;
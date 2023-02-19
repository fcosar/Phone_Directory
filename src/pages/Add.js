import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Navigate } from "react-router-dom";
import {FaReply} from "react-icons/fa";
import PhoneInput from "react-phone-number-input";

const Add = () => {
    const [name,setName]=useState("")
    const [lastName,setLastName]=useState("")
    const [PhoneNumber,setPhoneNumber]=useState("")
    
    const navigate=useNavigate()
   
    const savePerson=(event)=>{
        event.preventDefault();
        if(name===""||lastName===""){
            alert("boş kayıt yapılamaz")
            return;
        }
        const newPerson = {
          id: String(new Date().getTime()),
          Name: name,
          LastName: lastName,
          PhoneNumber: PhoneNumber,
        };
        axios.post("http://localhost:3004/person", newPerson)
          .then((res) => {
            console.log("kayıt başarılı");
            navigate("/");
          })
          .catch((err) => {
            console.log("başarısız");
          });
        
    };
    const Phone=()=>{
      // `value` will be the parsed phone number in E.164 format.
      // Example: "+12133734253".
      
      return (
        <PhoneInput
          placeholder="Enter phone number"
          value={PhoneNumber}
          onChange={(value)=>setPhoneNumber(value)}/>
      )
    };
  return (
    <div>
        
      <div className="container my-5">
        <form onSubmit={savePerson}>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="Alex"
              value={name}
              onChange={(event)=>setName(event.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              LastName
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="Alex"
              value={lastName}
              onChange={(event)=>setLastName(event.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="LastName" className="form-label">
              PhoneNumber
            </label>
            <PhoneInput
          placeholder="Enter phone number"
          value={PhoneNumber}
        onChange={(value)=>setPhoneNumber(value)}
        />
            
           
          </div>
          <div className="d-flex justify-content-center">
            <button className="btn btn-outline-danger m-3" type="submit">Save</button>
            <Link className="btn btn-outline-secondary m-3" to={"/"}>
             <FaReply/>
           </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Add;

import React, { useEffect, useState } from "react";
import { Link,useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { FaComment } from "react-icons/fa";
import {FaReply} from "react-icons/fa";
import PhoneInput from "react-phone-number-input";


const Call = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [CallPerson, setCallPerson] = useState(null);
  const edit=()=>{
    console.log("kayıt");
    navigate(`/person-edit`)
  }
  const [Name, setName] = useState("");
  const [LastName, setLastName] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  useEffect(() => {
    axios
      .get(`http://localhost:3004/person/${params.id}`)
      .then((res) => {
        setCallPerson(res.data);
        setName(res.data.Name);
        setLastName(res.data.LastName);
        setPhoneNumber(res.data.PhoneNumber);
      })
      .catch((err) => {
        console.log("başarısız");
      });
  }, []);
  if (CallPerson === null) {
    return null;
  }

  return (
    <div className="container my-5">
      <form className="">
        <input
          className="form-control form-control-lg my-3 shadow-sm p-3 mb-5 bg-body rounded"
          type="text"
          placeholder="Name"
          aria-label=".form-control-lg example"
          value={Name}
          onChange={(event)=>setName(event.target.value)}
        />
        <input
          className="form-control my-3 shadow-sm p-3 mb-5 bg-body rounded "
          type="text"
          placeholder="LastName"
          aria-label="default input example"
          value={LastName}
          onChange={(event)=>setLastName(event.target.value)}
        />
        <PhoneInput
          placeholder="Enter phone number"
          value={PhoneNumber}
        onChange={(value)=>setPhoneNumber(value)}
        />
      </form>

      <div className="d-flex justify-content-center my-3">
        <button type="button" className="btn btn-outline-danger btn-sm m-3 ">
          Call
        </button>
       
        <Link className="btn btn-outline-secondary btn-sm m-3" to={"/"}>
        <FaReply/>
        </Link>
      </div>
    </div>
  );
};

export default Call;

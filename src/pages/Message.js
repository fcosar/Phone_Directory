import React, {useState,useEffect} from "react";
import {Link, useParams ,useNavigate} from "react-router-dom";
import axios from "axios";
import {FaReply} from "react-icons/fa";
import PhoneInput from "react-phone-number-input";

const Message = () => {
  const navigate=useNavigate();
  
  const params = useParams();
  const [MessagePerson, setMessagePerson] = useState(null);
  const [Name, setName] = useState("");
  const [LastName, setLastName] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  
  useEffect(() => {
    axios
      .get(`http://localhost:3004/person/${params.id}`,)
      .then((res) => {
        setMessagePerson(res.data);
        setName(res.data.Name);
        setLastName(res.data.LastName);
        setPhoneNumber(res.data.PhoneNumber);
      })
      .catch((err) => {});
  }, []);
  const handleSubmit=(event)=>{
    event.preventDefault()
    if(
      Name ===""||
      LastName === "" ||
      PhoneNumber === ""
    ){
      alert("Bütün alanları doldurunuz")
      return;
    }
   const MessagePerson = {
    id:params.id,
    Name:Name,
    LastName:LastName,
    PhoneNumber:PhoneNumber
  }
   axios.put(`http://localhost:3004/person/${params.id}`,MessagePerson)
   .then((res)=>{
     navigate("/");
   })
    .catch(err=>{
      
    })
  };
  if (MessagePerson === null) {
    return null;
  }
  const deletePerson = () =>{
    axios.delete(`http://localhost:3004/person/${params.id}`)
     .then(res=>{
      setMessagePerson(res.data);
      setName(res.data.Name);
      setLastName(res.data.LastName);
      setPhoneNumber(res.data.PhoneNumber);
      navigate("/")
     })
     .catch(err=>{})
  };
  

  return (
    <div className=" m-5 ">
      
      <input
          className="form-control form-control-lg my-3 shadow-sm p-3 mb-5 bg-body rounded"
          type="text"
          placeholder="Name"
          aria-label=".form-control-lg example"
          value={Name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          className="form-control my-3 shadow-sm p-3 mb-5 bg-body rounded "
          type="text"
          placeholder="LastName"
          aria-label="default input example"
          value={LastName}
          onChange={(event) => setLastName(event.target.value)}
        />
          <PhoneInput
          placeholder="Enter phone number"
          value={PhoneNumber}
        onChange={(value)=>setPhoneNumber(value)}
        />
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Message
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <div className="d-flex justify-content-center my-3">
      <button className=" btn btn-danger m-3" type="submit">Send</button>
      <Link className="btn btn-outline-secondary m-3" to={"/"}>
        <FaReply/>
        </Link>
     
      </div>
     
    </div>
  );
};
export default Message;

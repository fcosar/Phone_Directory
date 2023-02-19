import React,{ useEffect,useState} from "react";

import axios from "axios";

import PersonList from "../components/PersonList";




const HomePage=()=>{

    const [person,setPerson]=useState(null)
    useEffect( ()=>{
        axios.get("http://localhost:3004/person")
        .then(res=>{
            setPerson(res.data)
        })
        .catch(err=>{
        })
        },[] )
        if(person===null) return null;
    return(
        <div >
        
            <PersonList person={person}/>
            
        </div>
    )
}
export default HomePage;
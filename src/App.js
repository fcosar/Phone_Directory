import React from "react";
import {BrowserRouter,Routes,Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Add from "./pages/Add";
import Call from "./pages/Call";
import Edit from "./pages/Edit";
import Message from "./pages/Message";
import PhoneInput from "react-phone-number-input";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/add-person" element={<Add/>}/>
        <Route path="/person-call/:id" element={<Call/>}/>
        <Route path="/person-edit/:id" element={<Edit/>}/>
        <Route path="/message/:id" element={<Message/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

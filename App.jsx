import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './layout.jsx'
//import {Routes, Route, useNavigate} from 'react-router-dom';
import './App.css'
import Main from './page1.jsx'
import Page from './front.jsx'

function App(){
  
  //const NextPage=(e)=>{
  return(
    <div className="parent">
      <BrowserRouter>
         <Routes>
          <Route path="/" element={<Layout/>} >
             <Route index element={<Page />} />
             <Route path="/login" element={< Main/>} />
          </Route>
           </Routes>  
          </BrowserRouter>
    </div>
  )
}
export default App;
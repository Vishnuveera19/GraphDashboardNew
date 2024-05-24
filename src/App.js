import React from 'react';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import DashBoard from './components/DashBoard';



export default function App() {
  return (
     <>
      <BrowserRouter>
     <br></br>
      <Routes>
        <Route path="/" exact element={<DashBoard />}></Route>
        
        
       


      </Routes>
       </BrowserRouter>
   </>

    
  )
  
  
}



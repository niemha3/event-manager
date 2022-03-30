import React from 'react';
import './App.css'; 
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Signup from './Signup';
import Dashboard from './Dashboard';






export default function App() {
  

  return (
   
     <Router>

       <Routes> 
         <Route exact path="/" element={<Dashboard />} />
         <Route path="/signup" element={<Signup/>} />
       </Routes>
        

     </Router>
   


   
    
     
    
 
      
      
      

   
    
  );
}



import { useState } from 'react';
import './App.css';
import About from './Component/About';
import Alert from './Component/Alert';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom" //To use Router// react router dom

function App() {
  
  const [alert, setAlert] = useState(null);
  
  const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  
  return (
    <>
    <Router>
    <Navbar title="TextUtils" aboutText="About"></Navbar>
      <Alert alert={alert}/>

      <div className="container">
      <Routes>
          <Route exact path="/about" element={<About/>}>
           
          </Route>
          
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter to analyze" />}>
          
           
          </Route>
        </Routes>
        {/* <TextForm showAlert={showAlert} heading="Enter to analyze"/> */}
        {/* <About /> */}
      </div>
    </Router>
      
    </>
  );
}

export default App;

// const capitalize = (word) => {
//   const lower = word.toLowerCase();
//   return lower.charAt(0).toUpperCase() = lower.slice(1);
// } 

// {capitalize(props.alert.type)}

import './index.css';

import React,{useState} from 'react';


function App() {

  // Making State
  const [weight,setWeight]=useState(0);
  const [height,setHeight]=useState(0);
  const [bmi,setBmi]=useState("");
  const [message,setMessage]=useState("");

  let calcBmi=(e)=>{
    //Prevent submitting to the server
    e.preventDefault()

    if(weight ===0|| height===0){
      alert('Please Enter a valid weight and height value')
    }else{
      let bmi=(weight/(height*height)*703)
      setBmi(bmi.toFixed(1))

      if(bmi<25){
        setMessage('You are underweight')
      }else if(bmi>=25 && bmi<30){
        setMessage('You are a healthy weight')
      }else{
        setMessage('You are overweight')
      }
    }
  }

let reload=()=>{
  window.location.reload()
}
  return (
    <div className="app">
     <div className='container'>
      <h2 className='center'>BMI Calculator</h2>
      <form onSubmit={calcBmi}>
      <div>
        <label>Weight (lbs)</label>
        <input value={weight} onChange={(e)=>setWeight(e.target.value)}></input>
      </div>

      <div>
        <label>Height (inch)</label>
        <input value={height} onChange={(e)=>setHeight(e.target.value)}></input>
      </div>

      <div>
        <button className='btn' type='submit'>Submit</button>
        <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
      </div>
      </form>
      <div className='center'>
        <h3>Your BMI is: {bmi}</h3>
        <p>{message}</p>
      </div>
     </div>
    </div>
  );
}

export default App;

import { useState } from 'react'
import './App.css'
import image from './assets/pic-1.png'

const App = () => {

  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [isWeight, setIsWeight] = useState(true);
  const [isHeight, setIsHeight] = useState(true);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  const validateInput = (event) => {
    if(event.target.value.match(/^[0-9]*$/)){
      if(event.target.name == 'height'){
        setHeight(event.target.value);
        setIsHeight(true);
      }else{
        setWeight(event.target.value);
        setIsWeight(true);
      }
    }else{
      if(event.target.name == 'height'){
        setIsHeight(false);
      }else{
        setIsWeight(false);
      }
    }
  }

  const bmiCalculate = (event) => {
    event.preventDefault();
    if(height === "" || weight === ""){
      alert("Please enter valid height and weight");
    }else{
      let result = (weight/(height/100)**2);
      setBmi(result.toFixed(2));
      if(result < 18.5){
        setMessage('Underweight! You need to eat enough food');
      }else if(result >= 18.5 && result <= 24.9){
        setMessage('Healthy');
      }else if(result >= 25 && result <= 29.9){
        setMessage('Overweight! Your need to Workout');
      }else{
        setMessage('Obese! Diet and Workout');
      }
    }
  }

  const handleReset = () => {
    setHeight("");
    setWeight("");
    setBmi("");
    setMessage("");
  }

  return (
    <div className='container'>
      <div className='bg-img'>
        <img src={image} alt="" />
      </div>
      <div className='main'>
        <div className='bmi'>
          <h2>BMI Calculator</h2>
          <div className='bmi-form'>
            <label htmlFor="">Height</label>
            <input type="text" value={height || ""} name='height' onChange={event => validateInput(event)} />
            {!isHeight && 
            <p className='invalid'>Invalid input</p>
            }
            <label htmlFor="">Weight</label>
            <input type="text" value={weight || ""} name='weight' onChange={event => validateInput(event)} />
            {!isWeight &&
            <p className='invalid'>Invalid input</p>
            }
            <div className='btns'>
              <button className='calculate' onClick={bmiCalculate}>Calculate</button>
              <button className='reset' onClick={handleReset}>Reset</button>
            </div>
            
            <div className='bmi-result'>
              <p><h2>BMI : {bmi}</h2></p>
              <p>{message}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

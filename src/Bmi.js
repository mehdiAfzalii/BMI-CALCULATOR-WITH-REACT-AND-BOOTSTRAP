import React, { useState } from 'react'

export default function Bmi() {

    const [age, setAge] = useState(19)
    const [height, setHeight] = useState('')    
    const [weight, setWeight] = useState('')    

    function handleIncrease() {
        setAge(c => c + 1)
    }

    function handleDec() {
        if (age >= 20) {
            setAge(c => c - 1)
        }
        else {
            alert("Age can't Under 19 :(")
        }
    }

    function handleReset() {
        setAge(19)
    }

    function handleWeight(e) {
        setWeight(e.target.value)
    }

    function handleHeight(e) {
        setHeight(e.target.value)
    }

    function calc() {
        const bmi = weight / (height * height)
        alert(`You BMI is ${bmi}`)
        setWeight('')
        setHeight('')
        setAge(19)
    }

  return (
    <div className='bmi border p-4 rounded shadow-lg'>
        <h2>BMI CALCULATOR WITH REACT</h2>
        <div class="mb-3 w-50">
            <label for="weight" class="form-label">Weight :</label>
            <input type="number" class="form-control" id="weight" placeholder="Enter weight..." value={weight} onChange={(e) => handleWeight(e)}/>
        </div>
        <div class="mb-3 w-50">
            <label for="height" class="form-label">Height :</label>
            <input type="number" class="form-control" id="height" placeholder="Enter heght..." value={height} onChange={(e) => handleHeight(e)}/>
        </div>
        <div className='age'>
            <h4>Age : {age}</h4>
            <button type="button" className="btn btn-success" onClick={handleIncrease}>Increase</button>
            <button type="button" className="btn btn-dark" onClick={handleReset}>Reset</button>
            <button type="button" className="btn btn-danger" onClick={handleDec}>Decrease</button>
        </div>
        <button type="button" className="btn btn-primary w-50" onClick={calc}>Submit</button>
    </div>
  )
}

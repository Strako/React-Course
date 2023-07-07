import React from 'react';
import FirstPage from './Pages/MyFisrtPage'
import InputField from './Components/Inputs/InputField'
import './App.css'


let App: React.FC = () => {
  return (
    <>
      <div className='App'>
        <span className="heading" style={{ color: "white" }}>Taskify!</span>
        <InputField />
        <span style={{color: "white"}}>{}</span>
      </div>

    </>
  )
}

export default App;



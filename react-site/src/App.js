import Navbar from './Components/Navbar';
import Input from './Components/Input';
import Results from './Components/Results';
import MyContext from './Components/MyContext';
import Explanation from './Components/Explanation';
import React, {useState} from 'react';
import {Routes, Route} from 'react-router-dom';

function App() {
  const [buttonsActive, setButtonsActive] = useState(false);
  function handleButtonsActive(){
    setButtonsActive(true);
  }

  return (
    <MyContext.Provider value = {{buttonsActive, handleButtonsActive}}>
      <div className = "container">
        <Navbar buttonsActive = {buttonsActive}/>
        <Routes>
          <Route path="/" element = {<Input />}></Route>
          <Route path="/results" element = {<Results />}></Route>
          <Route path="/explanation" element = {<Explanation />}></Route>
        </Routes>
      </div>
    </MyContext.Provider>
  );
}

export default App;

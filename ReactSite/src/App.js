import Navbar from './Components/Navbar';
import Input from './Components/Input';
import Results from './Components/Results';
import Explanation from './Components/Explanation';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className = "container">
      <Navbar/>
      <Routes>
        <Route path="/" element = {<Input />}></Route>
        <Route path="/results" element = {<Results />}></Route>
        <Route path="/explanation" element = {<Explanation />}></Route>
      </Routes>
    </div>
  );
}

export default App;

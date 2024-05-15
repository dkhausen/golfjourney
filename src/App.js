import './App.css';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import Other from './Other';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/other' element={<Other/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
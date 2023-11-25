import './App.css';
import { Route, Routes } from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import Login from './components/login';
import Homepage from './components/homepage';
import Signup from './components/signup';

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
                             
        </Routes>
      </BrowserRouter>
    
  )
}

export default App;

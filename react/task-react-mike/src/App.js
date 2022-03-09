import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Tugas/StylingComponent/web/Home/Home';
import Crypto from './Tugas/StylingComponent/web/Crypto/Crypto';
import Tech from './Tugas/StylingComponent/web/Tech/Tech';
import Finance from './Tugas/StylingComponent/web/Finance/Finance';
import Penutup from './Tugas/StylingComponent/web/Footer/Penutup';
import Navigation from './Tugas/StylingComponent/web/Navigation/Navigation';

function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
       <Navigation/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Crypto' element={<Crypto/>}/>
          <Route path='/Tech' element={<Tech/>}/>
          <Route path='/Finance' element={<Finance/>}/>
        </Routes>
      </BrowserRouter>
     <Penutup />
    </div>                            
    );  
  }                                                                                                                                                                                                                                                                                                                  

export default App;

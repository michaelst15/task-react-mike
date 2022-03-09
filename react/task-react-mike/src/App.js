import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
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
          <Route path='/crypto' element={<Crypto/>}/>
          <Route path='/tech' element={<Tech/>}/>
          <Route path='/finance' element={<Finance/>}/>
        </Routes>
      </BrowserRouter>
     <Penutup />
    </div>                            
    );  
  }                                                                                                                                                                                                                                                                                                                  

export default App;

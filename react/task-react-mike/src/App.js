import React from 'react';
import MyWeb from './Tugas/StylingComponent/web/Content/MyWeb';
import Header from './Tugas/StylingComponent/web/Header/Header';
import './App.css';
import Penutup from './Tugas/StylingComponent/web/Footer/Penutup';

function App() {
  return (
    <div className="App">
       <Header />
       <MyWeb />
       <Penutup />
    </div>
    );
  }

export default App;

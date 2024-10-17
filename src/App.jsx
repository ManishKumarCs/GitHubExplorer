import { useState } from 'react';
import axios from 'axios';
import Card from './Components/Card';
import Header from './Components/Header';
import Dashboard from './Components/Dashboard';
import { Route, Routes } from 'react-router-dom';
import About from './Components/About';
import Footer from './Components/Footer';

function App() {

  return (
    <>
    <div
  className="min-h-screen flex flex-col justify-between"
  style={{
    backgroundImage: `url("https://static.vecteezy.com/system/resources/previews/001/227/740/original/abstract-blurred-gradient-mesh-background-vector.jpg")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
    <Header/>
      <Routes>
        <Route path='/' element={<Dashboard/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
      <Footer/>
      </div>
    </>
  );
}

export default App;

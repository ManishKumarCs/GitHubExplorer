import { useState } from 'react';
import axios from 'axios';
import Card from './Components/Card';
import Header from './Components/Header';
import Dashboard from './Components/Dashboard';
import { Route, Routes } from 'react-router-dom';
import About from './Components/About';
import Footer from './Components/Footer';
import Favorites from './Components/Favorites';
import CompareProfiles from './Components/CompareProfiles';
import TopProfiles from './Components/TopProfiles';
import GitHubSearch from './Components/GitHubSearch';
import OpenSourceMatch from './Components/OpenSourceMatch';

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
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/compare" element={<CompareProfiles />} /> 
        <Route path="/top-profiles" element={<TopProfiles />} />
        <Route path="/find-github-users" element={<GitHubSearch/>} />
        <Route path="/open-source-match" element={<OpenSourceMatch/>} />
      </Routes>
      <Footer/>
      </div>
    </>
  );
}

export default App;

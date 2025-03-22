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
  className="min-h-screen flex flex-col bg-gray-100 justify-between"
  style={{
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

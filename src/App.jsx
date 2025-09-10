import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import Service from './pages/Service';

function App() {
  return (
    <>
      <Navbar />
      <div className='min-h-screen min-w-screen bg-base-100 flex items-center justify-center gap-4'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/service' element={<Service />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

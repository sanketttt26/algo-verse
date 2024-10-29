import { useState } from 'react';
import './App.css';
import BoxGrid from './components/custom/BoxGrid';
import { Route, Routes } from 'react-router-dom';
import Company from './components/custom/Company';
import Header from './components/custom/Header';
import Footer from './components/custom/Footer';

function App() {
  const [searchTerm, setSearchTerm] = useState(""); 
  return (
    <>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> 
      <Routes>
        <Route path="/" element={<BoxGrid searchTerm={searchTerm} />} /> 
        <Route path="/company/:companyName" element={<Company />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;

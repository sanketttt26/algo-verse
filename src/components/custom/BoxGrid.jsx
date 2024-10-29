import React from 'react';
import { useNavigate } from 'react-router-dom';
import { boxes } from '../../data.js';
import { FaAtlassian, FaMeta } from 'react-icons/fa6';
import { FaAmazon, FaMicrosoft, FaGoogle } from "react-icons/fa";
import { SiFlipkart, SiSamsung, SiCisco, SiOracle, SiAdobe } from 'react-icons/si';
import Hero from './Hero.jsx';

const icons = {
  FaAmazon: <FaAmazon />,
  SiAdobe: <SiAdobe />,
  FaMicrosoft: <FaMicrosoft />,
  SiFlipkart: <SiFlipkart />,
  FaGoogle: <FaGoogle />,
  SiSamsung: <SiSamsung />,
  FaMeta: <FaMeta />,
  FaAtlassian: <FaAtlassian />,
  SiOracle: <SiOracle />,
  SiCisco: <SiCisco />
};

const BoxGrid = ({ searchTerm }) => { // Receive the search term as a prop
  const navigate = useNavigate();

  const handleCompanyClick = (companyName) => {
    navigate(`/company/${companyName}`);
  };

  // Filter companies based on search term (case-insensitive)
  const filteredBoxes = boxes.filter(box =>
    box.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="lg:px-20 mt-8 min-h-screen">
      <Hero />
      <div className="grid grid-cols-2 px-4 lg:px-52 lg:grid-cols-4 mt-8 gap-8">
        {filteredBoxes.map((box, index) => (
          <button key={index} onClick={() => handleCompanyClick(box.name)}>
            <div
              style={{ backgroundColor: box.bgColor }}
              className={`rounded-xl py-5 px-2 flex items-center justify-center w-[100%] text-white filter saturate-100 hover:saturate-150`}>
              <div className="flex items-center space-x-2">
                <span className="text-lg lg:text-2xl">{icons[box.icon]}</span>
                <span className="text-lg lg:text-lg font-semibold">{box.name}</span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BoxGrid;

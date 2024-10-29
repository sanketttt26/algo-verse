
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";
import logo from "../../assets/logo.svg";

const Header = ({ searchTerm, setSearchTerm }) => {  // Receive props
  const navigate = useNavigate();
  
  const handleLogoClick = () => {
    navigate('/');
  };
  
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value); // Update the search term
  };

  return (
    <div className='flex justify-between px-4 py-5 lg:justify-between lg:px-20 gap-7 items-center'>
      <button onClick={handleLogoClick}>
        <img src={logo} width={150} alt="" />
      </button>
      
      <div className="hidden flex items-center justify-center lg:block">
        <div className='flex gap-4 items-center'>
          <div className="flex rounded-[0.3rem] border-gray-400 border-opacity-65 border px-2 bg-[#1E293B]">
            <input
              type="text"
              value={searchTerm} 
              onChange={handleSearchChange} 
              className="flex bg-transparent px-3 py-1 text-white rtl:text-right outline-0"
              placeholder="Search for company"
            />
            <div className="border-gray-600 border-opacity-70 my-2 border-l"></div>
          </div>
          <a href='https://github.com/sanketttt26' target='blank'>
            <FaGithub className='text-lg lg:text-3xl' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;

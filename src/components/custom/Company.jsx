import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaExternalLinkAlt } from "react-icons/fa";
import { companyQuestions } from "../../questions.js";
import DifficultyDistribution from './DifficultyDistribution.jsx';

const Company = () => {
  const { companyName } = useParams();
  const originalQuestions = companyQuestions[companyName] || [];
  const [questionList, setQuestionList] = useState(originalQuestions);
  const [searchTerm, setSearchTerm] = useState("");
  // Store the original question order in state
  const [originalOrder, setOriginalOrder] = useState(originalQuestions);
  const difficultyOrder = {
    Easy: 1,
    Medium: 2,
    Hard: 3,
  };

  const sortQuestionsByDifficulty = () => {
    const sortedQuestions = [...questionList].sort((a, b) => {
      return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
    });
    setQuestionList(sortedQuestions);
  };
  const resetQuestions = () => {
    setQuestionList(originalOrder);
    setSearchTerm("");
  };

   const handleSearchChange = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    if (term === "") {
      setQuestionList(originalOrder);
    } else {
      const filteredQuestions = originalOrder.filter((question) =>
        question.text.toLowerCase().includes(term)
      );
      setQuestionList(filteredQuestions);
    }
  };
  useEffect(() => {
    setQuestionList(originalQuestions);
    setOriginalOrder(originalQuestions); // Update originalOrder on company change
  }, [companyName, originalQuestions]);

  return (
    <div className="lg:px-52 mt-8 min-h-screen">
      <div className="flex  gap-5 items-center justify-center mb-10">
        <div className='flex flex-col lg:flex-row gap-3 items-center justify-between '> 
          <div className="w-[90%] lg:w-[50%]">
          <span className="text-2xl lg:text-6xl font-bold text-clip bg-gradient-to-r from-slate-50 to-cyan-200 bg-clip-text text-transparent text-center">
            {companyName}
          </span>
          <p className="text-2xl lg:text-4xl text-[#cdd8e8]">Cheat Sheet</p>
          <p className="text-[#4a5362] text-left">
          These are the most important questions asked in interviews at {companyName}
        </p>
        </div>
        
        <DifficultyDistribution /> 
        </div>

      </div>
      
        <div className="flex flex-col justify-center items-center ">
          <div className='flex flex-col lg:flex-row justify-between w-[90%] gap-2 '>
            <div className=" mt-2 w-[90%] font-bold text-sm lg:text-xl">Problems</div>
            <div className='flex  gap-2 mb-4 lg:justify-end '>
              <div className="flex rounded-[0.3rem] border-gray-400 border-opacity-65 border px-2 w-[30%] bg-[#1E293B]">
              <input
                type="text"
                value={searchTerm} 
                onChange={handleSearchChange} 
                className="flex bg-transparent py-1 w-full text-gray-500 rtl:text-right outline-0 overflow-hidden text-ellipsis whitespace-nowrap"
                placeholder="Search..."
              />
              
              </div>
              <button onClick={sortQuestionsByDifficulty} className=" border text-white border-white   hover:text-gray-300 hover:bg-slate-800 px-2 py-1 sm:px-3 sm:py-2 rounded-[0.3rem] text-sm sm:text-base">
                    Sort by Difficulty
            </button>
            <button onClick={resetQuestions} className= " bg-gray-500 hover:bg-gray-700 text-white px-2 py-1 hidden lg:block sm:px-3 sm:py-2 rounded-[0.3rem]  ">
            Clear
            </button>
            

          </div>
          </div>
          {questionList.length > 0 ? (
            questionList.map((question, index) => (
              <div key={index} className="w-[90%] lg:w-[90%] border-[#1E293B] border-b-2 flex flex-col lg:flex-row m-2 p-4 justify-between items-start lg:items-center">
                <div className="flex-1">
                  <p>{question.text}</p>
                  <p className="text-sm font-light text-blue-500">{question.difficulty}</p>
                </div>
                <div className="flex-shrink-0 self-start lg:justify-between lg:self-center mt-4 lg:mt-0">
                  <div className="flex items-center gap-2 text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white cursor-pointer border px-3 py-2 rounded-[0.3rem]">
                    <a href={question.link} target="_blank" rel="noopener noreferrer">
                      Practice
                    </a>
                    <FaExternalLinkAlt />
                  </div>
                </div>
              </div>

            ))
          ) : (
            <p>No questions </p>
          )}
        </div>
      
    </div>
  );
};

export default Company;

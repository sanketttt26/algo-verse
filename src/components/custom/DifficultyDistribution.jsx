import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useParams } from "react-router-dom";
import { companyQuestions } from "../../questions.js";

const DifficultyDistribution = () => {
  const { companyName } = useParams();
  const questions = companyQuestions[companyName] || [];

  // Calculate the count of each difficulty level
  const difficultyCount = { easy: 0, medium: 0, hard: 0 };
  questions.forEach((question) => {
    if (question.difficulty === "Easy") difficultyCount.easy++;
    else if (question.difficulty === "Medium") difficultyCount.medium++;
    else if (question.difficulty === "Hard") difficultyCount.hard++;
  });

  const totalQuestions = questions.length;
  const easyPercentage = totalQuestions ? (difficultyCount.easy / totalQuestions) * 100 : 0;
  const mediumPercentage = totalQuestions ? (difficultyCount.medium / totalQuestions) * 100 : 0;
  const hardPercentage = totalQuestions ? (difficultyCount.hard / totalQuestions) * 100 : 0;

  return (
    <div className="flex flex-row gap-2 items-center bg-gray-800 p-4 rounded-[0.3rem] shadow-md max-w-lg px-8 py-5 ">
      <div className="flex flex-col justify-center">
        <h2 className="text-white text-center font-bold mb-4">Difficulty Distribution</h2>
      
      {/* Container for CircularProgressbar */}
      <div style={{ position: "relative", width: 150, height: 150 }}>
        
        {/* Hard Segment */}
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
          <CircularProgressbar
            value={hardPercentage + mediumPercentage + easyPercentage}
            styles={buildStyles({
              rotation: 0,
              pathColor: "#ef5350", // Red for Hard
              trailColor: "transparent",
              strokeLinecap: "butt",
            })}
          />
        </div>

        {/* Medium Segment */}
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
          <CircularProgressbar
            value={mediumPercentage + easyPercentage}
            styles={buildStyles({
              rotation: 0,
              pathColor: "#ffa726", // Orange for Medium
              trailColor: "transparent",
              strokeLinecap: "butt",
            })}
          />
        </div>

        {/* Easy Segment */}
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
          <CircularProgressbar
            value={easyPercentage}
            styles={buildStyles({
              rotation: 0,
              pathColor: "#4caf50", // Green for Easy
              trailColor: "transparent",
              strokeLinecap: "butt",
            })}
          />
        </div>

        {/* Center text */}
        <div style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          textAlign: "center",
        }}>
          <div className="text-lg font-bold">Total: {totalQuestions}</div>
        </div>
      </div>
      </div>

      <div className="mt-4 text-white text-center">
        <p>Easy: {easyPercentage.toFixed(1)}%</p>
        <p>Medium: {mediumPercentage.toFixed(1)}%</p>
        <p>Hard: {hardPercentage.toFixed(1)}%</p>
      </div>
    </div>
  );
};

export default DifficultyDistribution;

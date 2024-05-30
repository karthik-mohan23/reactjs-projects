import { useState } from "react";

const stepContent = ["Learn React", "Build Projects", "Get a job"];

function Steps() {
  const [activeIndex, setActiveIndex] = useState(0);
  const arrLength = stepContent.length;

  function handleNext() {
    if (activeIndex >= arrLength - 1) return;
    setActiveIndex((currentIndex) => currentIndex + 1);
  }

  function handlePrevious() {
    if (activeIndex <= 0) return;
    setActiveIndex((currentIndex) => currentIndex - 1);
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-[90%] max-w-xs border border-gray-500 rounded-lg bg-gray-200">
        <div className="flex gap-7 justify-center items-center pt-5">
          {[1, 2, 3].map((stepCount, index) => (
            <div
              key={stepCount}
              className={`${
                activeIndex >= index ? "bg-blue-500" : "bg-gray-400"
              } w-5 h-5 rounded-full  flex justify-center items-center`}>
              {stepCount}
            </div>
          ))}
        </div>
        <p className="flex justify-center py-7">{stepContent[activeIndex]}</p>

        <div className="flex justify-center gap-8 items-center pb-5">
          <button
            className="bg-blue-400 px-2 py-1 rounded-lg"
            onClick={handlePrevious}>
            Previous
          </button>
          <button
            className="bg-blue-400 px-2 py-1 rounded-lg"
            onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
export default Steps;

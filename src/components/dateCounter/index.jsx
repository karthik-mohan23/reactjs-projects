import { useState } from "react";

function DateCounter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + count);

  const nextDay = () => {
    setCount((c) => c + step);
  };
  const prevDay = () => {
    setCount((c) => c - step);
  };

  const increaseStep = () => {
    setStep((s) => s + 1);
  };
  const decreaseStep = () => {
    setStep((s) => s - 1);
  };

  let displayText;
  if (count === 0) {
    displayText = "Today is";
  } else if (count === 1) {
    displayText = count + " day from today is";
  } else if (count === -1) {
    displayText = Math.abs(count) + " day ago was";
  } else if (count < 0) {
    displayText = Math.abs(count) + " days ago was";
  } else if (count > 0) {
    displayText = Math.abs(count) + " days from today is";
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex gap-3 items-center">
        <button
          className="px-2 py-1 border border-gray-400 rounded-lg"
          onClick={decreaseStep}>
          -
        </button>
        <p>Step:{step}</p>
        <button
          className="px-2 py-1 border border-gray-400 rounded-lg"
          onClick={increaseStep}>
          +
        </button>
      </div>
      <div className="flex gap-3 items-center">
        <button
          className="px-2 py-1 border border-gray-400 rounded-lg"
          onClick={prevDay}>
          -
        </button>
        <p>Count:{count}</p>

        <button
          className="px-2 py-1 border border-gray-400 rounded-lg"
          onClick={nextDay}>
          +
        </button>
      </div>
      <p className="pt-4">{`${displayText} ${currentDate.toDateString()}`}</p>
      {/* <p className="pt-4">
        {count === 0 && `Today is ${currentDate.toDateString()}`}
        {count > 0 &&
          `${count} day${
            Math.abs(count) === 1 ? "" : "s"
          } from today is ${currentDate.toDateString()}`}

        {count < 0 &&
          `${Math.abs(count)} day${
            count === 1 ? "" : "s"
          } ago was ${currentDate.toDateString()}`}
      </p> */}
    </div>
  );
}
export default DateCounter;

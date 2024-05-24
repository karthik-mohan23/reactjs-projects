import { useState } from "react";
import { generateRandomColor } from "./utils";

const RandomBackgroundGenerator = () => {
  const [bgColor, setBgColor] = useState("#FFF");

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: `${bgColor}` }}>
      <button
        className="border border-gray-500 bg-white rounded-lg px-3 py-1 text-xl"
        onClick={() => setBgColor(generateRandomColor())}>
        Generate random color
      </button>
    </div>
  );
};
export default RandomBackgroundGenerator;

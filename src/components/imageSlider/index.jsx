import { useState } from "react";
import { imageUrls } from "./data";

const ImageSlider = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const activeImageUrl = imageUrls[activeImageIndex];
  const arrayLength = imageUrls.length;

  function handleNext() {
    if (activeImageIndex >= arrayLength - 1) {
      return;
    }
    setActiveImageIndex((currentIndex) => currentIndex + 1);
  }
  function handlePrev() {
    if (activeImageIndex <= 0) {
      return;
    }
    setActiveImageIndex((currentIndex) => currentIndex - 1);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <div key={activeImageUrl}>
        <img src={activeImageUrl} alt="birds" />
      </div>
      <div className="flex justify-between items-center gap-6">
        <button
          className="px-2 py-2 rounded-md border border-gray-500"
          onClick={handlePrev}>
          Prev
        </button>
        <button
          className="px-2 py-2 rounded-md border border-gray-500"
          onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};
export default ImageSlider;

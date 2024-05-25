import { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ numStars = 5 }) => {
  const [isSelected, setIsSelected] = useState(0);
  const [isHovered, setIsHovered] = useState(0);
  //don't use initial state as null because, console.log(null >= 0(index of first element)) = true
  //so the first icon will always be active
  //therefore, use index =index + 1

  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="flex gap-2">
        {Array.from({ length: numStars }, (v, i) => i).map((item, index) => {
          index = index + 1;
          return (
            <FaStar
              key={index}
              size={30}
              onMouseOver={() => setIsHovered(index)}
              onMouseLeave={() => setIsHovered(isSelected)} // otherwise we will lose out selected rating
              onClick={() => setIsSelected(index)}
              className={`${
                (isHovered || isSelected) >= index ? "text-yellow-400" : null
              }`}
              //put hover before selected otherwise, after you have selected a rating
              //you won't be able to change the hover state
              //   className={`${
              //     (isSelected || isHovered) >= index ? "text-yellow-400" : null
              //   }`}
            />
          );
        })}
      </div>
    </section>
  );
};
export default StarRating;

import { useState } from "react";
import { flashCardData } from "./data";
import FlashCard from "./FlashCard";

const FlashCards = () => {
  const [activeId, setActiveId] = useState(null);

  const handleActiveId = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="max-w-5xl flex flex-wrap gap-10 mx-auto pt-20">
      {flashCardData.map((card) => (
        <FlashCard
          {...card}
          key={card.id}
          handleActiveId={handleActiveId}
          isActive={activeId === card.id}
        />
      ))}
    </div>
  );
};
export default FlashCards;

import { useState } from "react";
import AccordionItem from "./AccordionItem";
import data from "./data";

//Implement
//Single selection
//Multi selection

const Accordion = () => {
  // Enable Single select
  const [activeId, setActiveId] = useState(null);

  function handleActiveId(id) {
    if (activeId === id) {
      setActiveId(null);
    } else {
      setActiveId(id);
    }
  }

  //Enable multiselect
  // const [activeId, setActiveId] = useState([]);

  // function handleActiveId(id) {
  //   if (activeId.includes(id)) {
  //     const newIdArray = activeId.filter((item) => item !== id);
  //     setActiveId(newIdArray);
  //   } else {
  //     setActiveId((prevState) => [...prevState, id]);
  //   }
  // }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-4xl ">
        {data.map(({ id, question, answer }) => {
          return (
            <AccordionItem
              key={id}
              id={id}
              question={question}
              answer={answer}
              handleActiveId={handleActiveId}
              isOpen={id === activeId} // single select
              // isOpen={activeId.includes(id)}  // multi select
            />
          );
        })}
      </div>
    </div>
  );
};
export default Accordion;

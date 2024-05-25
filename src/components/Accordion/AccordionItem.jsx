import { BiChevronDown } from "react-icons/bi";
import { BiChevronUp } from "react-icons/bi";

const AccordionItem = ({ id, question, answer, isOpen, handleActiveId }) => {
  // Another way to handle multiselect
  // const [activeId, setActiveId] = useState(null);

  // function handleActiveId(id) {
  //   activeId === id ? setActiveId(null) : setActiveId(id);
  // }

  return (
    <div
      className="border rounded-lg border-gray-400 px-4 py-4 cursor-pointer mb-4"
      onClick={() => handleActiveId(id)}>
      <div className=" flex items-center gap-4 justify-between">
        <p className="text-lg">{question}</p>
        {/* {activeId === id ? <BiChevronUp /> : <BiChevronDown />} */}
        {isOpen ? <BiChevronUp /> : <BiChevronDown />}
      </div>
      {isOpen > 0 && <p className="text-xl pt-4">{answer}</p>}
    </div>
  );
};
export default AccordionItem;

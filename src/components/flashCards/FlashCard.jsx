function FlashCard({ id, question, answer, handleActiveId, isActive }) {
  return (
    <div
      onClick={() => handleActiveId(id)}
      className={` ${
        isActive && "bg-blue-500"
      } flex justify-center items-center px-3 py-3  w-56 h-56 border border-gray-400 rounded-lg cursor-pointer`}>
      {isActive ? <h2>{answer}</h2> : <h2>{question}</h2>}
    </div>
  );
}
export default FlashCard;

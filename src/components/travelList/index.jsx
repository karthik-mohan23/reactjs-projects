import { useState } from "react";

function TravelList() {
  const [listNumber, setListNumber] = useState(numberOfItems[0].value);
  const [itemName, setItemName] = useState("");
  const [travelList, setTravelList] = useState([]);

  const travelListLength = travelList.length;

  function addToTravelList(listNumber, itemName) {
    const newItem = {
      id: crypto.randomUUID(),
      listNumber,
      itemName,
      isPacked: false,
    };
    setTravelList((currentList) => [...currentList, newItem]);
    setListNumber(numberOfItems[0].value);
    setItemName("");
  }
  function handlePacked(id) {
    const updatedItems = travelList.map((item) =>
      item.id === id ? { ...item, isPacked: !item.isPacked } : item
    );
    setTravelList(updatedItems);
  }
  function clearTravelList() {
    setTravelList([]);
  }

  function removeItem(id) {
    const newList = travelList.filter((item) => item.id !== id);
    setTravelList(newList);
  }

  function sortTravelList(sortValue) {
    let newSortedList = [...travelList];

    if (sortValue === "description") {
      newSortedList.sort((a, b) => a.itemName.localeCompare(b.itemName));
    } else if (sortValue === "packed") {
      newSortedList.sort((a, b) => a.isPacked - b.isPacked);
    }

    setTravelList(newSortedList);
  }

  return (
    <section className="">
      <div className="max-w-2xl mx-auto w-[90%]">
        <Logo />
        <AddListForm
          listNumber={listNumber}
          setListNumber={setListNumber}
          itemName={itemName}
          setItemName={setItemName}
          addToTravelList={addToTravelList}
        />
        <ShowList
          travelList={travelList}
          clearTravelList={clearTravelList}
          removeItem={removeItem}
          handlePacked={handlePacked}
          sortTravelList={sortTravelList}
        />
        <Stats travelListLength={travelListLength} />
      </div>
    </section>
  );
}
export default TravelList;

const Logo = () => {
  return <h1 className="text-center py-9 text-4xl">Far Away</h1>;
};

const numberOfItems = [
  {
    label: "1",
    value: "1",
  },
  {
    label: "2",
    value: "2",
  },
  {
    label: "3",
    value: "3",
  },
  {
    label: "4",
    value: "4",
  },
  {
    label: "5",
    value: "5",
  },
];

const AddListForm = ({
  listNumber,
  setListNumber,
  itemName,
  setItemName,
  addToTravelList,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    addToTravelList(listNumber, itemName);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center gap-5">
      <select
        value={listNumber}
        onChange={(event) => {
          setListNumber(event.target.value);
        }}
        className="block   bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="grid-state">
        {numberOfItems.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      <div>
        <label>
          <input
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Enter item name"
          />
        </label>
      </div>
    </form>
  );
};

const ShowList = ({
  travelList,
  clearTravelList,
  removeItem,
  handlePacked,
  sortTravelList,
}) => {
  const [sortBy, setSortBy] = useState("");

  return (
    <div className="py-12">
      <ul className="flex items-center gap-5 flex-wrap">
        {travelList.map(({ id, listNumber, itemName, isPacked }) => {
          return (
            <>
              <li key={id}>
                <input
                  className={`mr-2 leading-tight `}
                  type="checkbox"
                  checked={isPacked}
                  onChange={() => handlePacked(id)}
                />
                <span className={`${isPacked && "line-through"}`}>
                  {listNumber} {itemName}
                </span>
              </li>
              <button
                onClick={() => removeItem(id)}
                type="button"
                className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-2 py-1 text-center  dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
                Delete
              </button>
            </>
          );
        })}
      </ul>
      <div className="py-5 flex items-center justify-center gap-6">
        <select
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value);
            sortTravelList(e.target.value);
          }}
          className="block   bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-state">
          <option value="">Sort by</option>
          <option value="description">By description</option>
          <option value="packed">By packed</option>
        </select>
        <button
          onClick={clearTravelList}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Clear List
        </button>
      </div>
    </div>
  );
};

const Stats = ({ travelListLength }) => {
  return (
    <div>
      <h2 className="text-center">
        You have {travelListLength} items on your list, and you already packed 0
        (0%)
      </h2>
    </div>
  );
};

import { useState } from "react";
import tabsData from "./data";

const Tabs = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const { content } = tabsData[activeTabIndex];

  return (
    <section className="min-h-screen flex flex-col gap-8 items-center justify-center">
      <div className="flex">
        {tabsData.map(({ label, id }, index) => {
          return (
            <button
              key={id}
              onClick={() => setActiveTabIndex(index)}
              className={` ${
                activeTabIndex === index ? "bg-blue-400" : "bg-gray-400"
              }  px-3 py-2 border border-r border-black`}>
              {label}
            </button>
          );
        })}
      </div>
      <p>{content}</p>
    </section>
  );
};
export default Tabs;

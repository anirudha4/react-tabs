import { useState } from "react";

const Tabs = () => {
  const [active, setActive] = useState(0);
  const tabMenu = [
    {
      id: 1,
      name: "Home"
    },
    {
      id: 2,
      name: "About"
    },
    {
      id: 3,
      name: "Settings"
    },
    {
      id: 4,
      name: "Account"
    }
  ];
  return (
    <div className="tabs">
      {tabMenu.map((tab, idx) => (
        <div
          onClick={(e) => setActive(idx)}
          className={`tab ${idx === active && "active"}`}
        >
          {tab.name}
        </div>
      ))}
    </div>
  );
};

export default Tabs;

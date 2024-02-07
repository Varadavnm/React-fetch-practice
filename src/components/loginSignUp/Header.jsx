import React, { useEffect } from "react";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import "./header.css";
const Header = () => {
  const [items, setItems] = useState([
    { id: 1, checked: false, item: "New item 1" },
    { id: 2, checked: false, item: "Chocolates" },
    { id: 3, checked: false, item: "Sweet almonds" },
  ]);
  // const [countries,setCountries] = useState([{},{},{}])

  const handleClick = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    console.log(JSON.stringify(listItems));
    setItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("shopinglist", JSON.stringify(listItems));
  };
  // useEffect(()=>setTimeout)
  return (
    <header className="header">
      <div>
      {/* <p>Toay's date:{date.getDate()}</p> */}
      <ul className="topelements">
        {items.map((item) => (
          <li className="item" key={item.id}>
            <input
              type="checkbox"
              onChange={() => handleClick(item.id)}
              checked={item.checked}
            />
            <label style={{ color: item.checked ? "green" : "red" }}>
              {item.item}
            </label>
            <FaTrashAlt onClick={() => handleDelete(item.id)} />
          </li>
        ))}
      </ul>
      </div>
    </header>
  );
};

export default Header;

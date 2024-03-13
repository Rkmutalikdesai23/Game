// MatchGame.js
import React, { useState } from "react";
import "./MatchGame.css"; // You can add styling as per your Figma design

const MatchGame = ({ items }) => {
  const [tries, setTries] = useState(0);
  const [matches, setMatches] = useState(0);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleClick = id => {
    if (selectedItems.length === 2) return;

    setSelectedItems([...selectedItems, id]);

    if (selectedItems.length === 1) {
      setTries(tries + 1);

      if (items[selectedItems[0]].name === items[id].name) {
        setMatches(matches + 1);
        const updatedItems = [...items];
        updatedItems[selectedItems[0]].matched = true;
        updatedItems[id].matched = true;
        setSelectedItems([]);
      } else {
        setTimeout(() => setSelectedItems([]), 1000); // Reset selected items after 1 second
      }
    }
  };

  return (
    <div className="match-game">
      <div className="game-board">
        {items.map(item => (
          <div
            key={item.id}
            className={`item ${
              selectedItems.includes(item.id) ? "selected" : ""
            } ${item.matched ? "matched" : ""}`}
            onClick={() => handleClick(item.id)}
          >
            {item.matched || selectedItems.includes(item.id) ? (
              <img src={item.image} alt={item.name} />
            ) : (
              <div className="item-back" />
            )}
          </div>
        ))}
      </div>
      <div className="game-info">
        <p>Tries: {tries}</p>
        <p>Matches: {matches}</p>
      </div>
    </div>
  );
};

export default MatchGame;

// App.js
import React from "react";
import MatchGame from "./MatchGame";
import ItemType from "./ItemType";

const items = [
  new ItemType(1, "Banana", "https://tinyurl.com/dwysdudm", false),
  new ItemType(2, "Apple", "https://tinyurl.com/wr5be5nd", false),
  new ItemType(3, "Orange", "https://tinyurl.com/5afywty3", false),
  new ItemType(4, "Grapes", "https://tinyurl.com/2r255t48", false),
  new ItemType(5, "Watermelon", "https://tinyurl.com/3kt427mw", false),
  new ItemType(6, "Pineapple", "https://tinyurl.com/47wynpyb", false),
  // Add more items as needed
];

const App = () => {
  return (
    <div className="app">
      <h1>Memory Matching Game</h1>
      <MatchGame items={items} />
    </div>
  );
};

export default App;

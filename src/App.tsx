import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import "./App.css";

function App() {
  const items = ["New York", "Los Angeles", "San Francisco"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        heading="Miami"
        items={items}
        onSelectItem={handleSelectItem}
      ></ListGroup>
    </div>
  );
}

export default App;

import Like from "./components/Like/Like";
import { useState } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(true);
    console.log(isVisible);
  };
  return (
    <div>
      <button onClick={handleClick}>Show</button>
    </div>
  );
}

export default App;

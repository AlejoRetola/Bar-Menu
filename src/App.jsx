import { useState } from "react";
import Breakfast from "./Breakfast";
import Menu from "./Menu";
import data from "./data";
import "./style.css";

function App() {
  const [category, setCategory] = useState("all");

  function ToggleMenu() {
    setCategory(event.target.id);
  }

  return (
    <div className="App">
      <Menu toggle={ToggleMenu} />
      <Breakfast items={data} type={category} />
    </div>
  );
}

export default App;

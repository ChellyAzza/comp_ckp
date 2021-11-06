import react from "react";
import reactDom from "react-dom";
import Fullname from "./Profile/Fullname";
import Porfilephotos from "./Profile/Profilephotos";
import Adress from "./Profile/Adress";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Fullname />
      <Porfilephotos />
      <Adress />
    </div>
  );
}

export default App;

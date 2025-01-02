import { useState } from "react";
import "./App.css";
import { CakeView } from "./features/Cake/CakeView";
import IceCreamView from "./features/IceCream/IceCreamView";
import UserView from "./features/user/UserView";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <CakeView />
      <IceCreamView />
      <UserView />
    </div>
  );
}

export default App;

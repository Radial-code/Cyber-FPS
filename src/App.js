import logo from "./logo.svg";
import "./App.css";
import "./assets/styles/style.css";
import { useState, useEffect } from "react";
import Home from "./component/Home";
import Loader from "./common/Loader.jsx";

function App() {
  const [loading, setLoading] = useState(true);

  // FOR FULL SCREEN LOADING
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return <div>{loading ? <Loader /> : <Home />}</div>;
}

export default App;

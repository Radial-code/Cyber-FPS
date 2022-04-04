import "./App.css";
import "./assets/styles/style.css";
import { useState, useEffect } from "react";
import Home from "./component/Home";
import Loader from "./common/Loader";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AOS.init();
  const [loading, setLoading] = useState(true);

  // FOR FULL SCREEN LOADING
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <>
      {loading && <Loader />}
      <Home />
    </>
  );
}

export default App;

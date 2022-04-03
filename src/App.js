import logo from "./logo.svg";
import "./App.css";
import "./assets/styles/style.css";
import Header from "./component/Header";
import WhatIsCyber from "./component/WhatIsCyber";
import CryptoStraps from "./component/CryptoStraps";
import Team from "./component/Team";
import Solana from "./component/Solana";
import Footer from "./component/Footer";

function App() {
  return (
    <div>
      <Header />
      <WhatIsCyber />
      <CryptoStraps />
      <Team />
      <Solana />
      <Footer />
    </div>
  );
}

export default App;

import Header from "./Header";
import WhatIsCyber from "./WhatIsCyber";
import CryptoStraps from "./CryptoStraps";
import Team from "./Team";
import Solana from "./Solana";
import Footer from "./Footer";
import BackToTop from "../common/BackToTop";
import Faq from "./Faq";
import { Hero } from "./Hero";
import GamePlay from "./GamePlay";

const Home = () => {
  return (
    <>
      <Hero />
      <GamePlay />
      <WhatIsCyber />
      <CryptoStraps />
      <Team />
      <Faq />
      <Solana />

      <Footer />
      <BackToTop />
    </>
  );
};

export default Home;

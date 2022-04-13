import BackToTop from "../common/BackToTop";
import CryptoStraps from "./CryptoStraps";
import Faq from "./Faq";
import Footer from "./Footer";
import GamePlay from "./GamePlay";
import { Hero } from "./Hero";
import NonPurus from "./NonPurus";
import PurusDictim from "./PurusDictim";
import Solana from "./Solana";
import Team from "./Team";
import WhatIsCyber from "./WhatIsCyber";

const Home = () => {
  return (
    <>
      <Hero />
      <section className="bg-color">
        <GamePlay />
        <WhatIsCyber />
      </section>
      <CryptoStraps />
      <NonPurus />
      <PurusDictim />
      <Team />
      <Faq />
      <Solana />

      <Footer />
      <BackToTop />
    </>
  );
};

export default Home;

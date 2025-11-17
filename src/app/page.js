
import Hero from "./component/Hero.js";
import About from "./component/About.js";
import Services from "./component/Services.js";
import Tokenomics from "./component/Tokenomics.js";
import Exchange from "./component/Exchange.js"
import Footer from "./component/Footer.js"
import Faq from "./component/Faq.js"
import Ourmission from "./component/Ourmission.js"

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Ourmission/>
      <Services />
      <Tokenomics />
      <Exchange/>
      <Faq/>

    </>
  );
}

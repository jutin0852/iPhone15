import Feature from "./component/Feature";
import Hero from "./component/Hero";
import Highlights from "./component/Highlights";
import HowItWorks from "./component/HowItWorks";
import Model from "./component/Model";
import Navbar from "./component/Navbar";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Feature />
      <HowItWorks />
    </main>
  );
}
export default App;

import Feature from "./component/Feature";
import Hero from "./component/Hero";
import Highlights from "./component/Highlights";
import HowItWorks from "./component/HowItWorks";
import Navbar from "./component/Navbar";
import Model from './component/Model'


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

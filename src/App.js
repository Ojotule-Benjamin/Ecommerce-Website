import Hero from "./components/hero/Hero";
import Topbar from "./components/topbar/Topbar";
import Feature from "./components/feature/Feature";
import Product1 from "./components/product1/Product1";

function App() {
  return ( 
    <div className="App">
      <Topbar/>
      <Hero/>
      <Feature/>
      <Product1/>
    </div>
  );
}

export default App;

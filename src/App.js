import { Fragment } from "react";
import About from "./Components/About/About";
import Intro from "./Introduction/Intro";
import ProductList from "./Components/Projects/ProjectList/ProjectList";
import Contact from "./Components/Contact/Contact";
function App() {
  return (
    <Fragment>
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </Fragment>
  );
}

export default App;

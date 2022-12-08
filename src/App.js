import { Fragment } from "react";
import About from "./Components/About/About";
import Intro from "./Introduction/Intro";
import ProductList from "./Components/Projects/ProjectList/ProjectList";
function App() {
  return (
    <Fragment>
      <Intro />
      <About />
      <ProductList />
    </Fragment>
  );
}

export default App;

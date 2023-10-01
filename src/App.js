import {Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div className="routes-controller">
      <Header/>
    <Routes>
      <Route element={<Homepage />} path="/"></Route>
      <Route element={<About />} path="/about"></Route>
      <Route element={<Projects />} path="/projects"></Route>
      <Route element={<Contact />} path="/contact"></Route>
    </Routes>
    </div>
  );
}

export default App;

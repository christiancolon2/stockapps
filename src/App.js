import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Nav from "./components/Nav";
import Symbol from "./components/Symbol";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import data from "./stock-data";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/stocks" element={<Dashboard data={data} />} />
        <Route path="/stocks/:symbol" element={<Symbol data={data} />} />
      </Routes>
    </div>
  );
}

export default App;

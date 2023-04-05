import "./App.css";
import Navbar from "./Day10/Navbar";
import Home from "./Day10/Home";
import Destination from "./Day10/Destination";
import About from "./Day10/About";
import Contact from "./Day10/Contact";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import Register from "./Day10/Register";
import Day9 from "./Day9/DayNine";
import App7 from './day7';
import Day8 from './day8';
import ProductList from './day6';

function App() {
  return (
    <div className="App">
      <ProductList/><br></br>
      <App7/><br></br>
      <Day8/><br></br>
      <BrowserRouter>
      <Day9/><br></br>
      <Navbar />
      <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/destination" exact element={<Destination/>} />
          <Route path="/about" exact element={<About/>} />
          <Route path="/contact" exact element={<Contact/>} />
          <Route path="/registration" exact element={<Register/>} />
     </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;



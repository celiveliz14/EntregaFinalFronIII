import { Routes,Route, Outlet } from "react-router-dom";
import Home from './Routes/Home'
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import './index.css'


function App() {
  return (
      <div className="App" >
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="dentist/:id" element={<Detail/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path='favs' element={<Favs/>}/>
          </Routes>
          <Outlet/>
          <Footer/>
      </div>
  );
}

export default App;

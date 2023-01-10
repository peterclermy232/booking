import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
//import Home from "./pages/home/Home";
import Home from "./Pages/home/Home";
//import Hotel from "./pages/hotel/Hotel";
import Hotel from "./Pages/hotel/Hotel";
//import List from "./pages/list/List";
import List from "./Pages/list/List";
//import Login from "./pages/login/Login";
import Login from "./Pages/login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

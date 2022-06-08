import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Header from './Component/Header/index.js';
import Footer from "./Component/footer/index.js";
import Main from "./Component/main/index.js";
import Profile from "./Component/profile/index.js";
import Login from "./Component/Login/index.js";

function App() {
  return (
    
    <BrowserRouter>
        <Header />
        <Footer />  
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
        </Routes>  
  </BrowserRouter>
    
  );
}

export default App;

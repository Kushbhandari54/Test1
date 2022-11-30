import Header from "./Component/Header/index.js";
import Footer from "./Component/footer/index.js";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { pageRoute } from "./config/routes";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {pageRoute.map(({ id, path, component }) => (
          <Route key={id} path={path} element={component} />
        ))}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

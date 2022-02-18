import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductState from "./contexts/ProductState";
import Main from "./views/Main";
function App() {
  return (
    <BrowserRouter>
      <ProductState>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </ProductState>
    </BrowserRouter>
  );
}

export default App;

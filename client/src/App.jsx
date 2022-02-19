import { BrowserRouter, Routes, Route } from "react-router-dom";
import PetState from "./contexts/PetState";
import Main from "./views/Main";
function App() {
  return (
    <BrowserRouter>
      <PetState>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </PetState>
    </BrowserRouter>
  );
}

export default App;

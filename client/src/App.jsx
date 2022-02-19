import { BrowserRouter, Routes, Route } from "react-router-dom";
import PetState from "./contexts/PetState";
import AddPet from "./views/AddPet";
import DetailPet from "./views/DetailPet";
import EditPet from "./views/EditPet";
import Main from "./views/Main";
function App() {
  return (
    <BrowserRouter>
      <PetState>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/pets/new" element={<AddPet />} />
          <Route path="/pets/:id/edit" element={<EditPet />} />
          <Route path="/pets/:id" element={<DetailPet />} />
        </Routes>
      </PetState>
    </BrowserRouter>
  );
}

export default App;

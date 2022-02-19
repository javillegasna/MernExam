import PetEditFrm from "../Components/PetEditFrm";
import Header from "../layout/Header";
const EditPet = () => {
  return ( <main>
    <Header route={"/"} message={"back to home"} />
    <PetEditFrm/>
  </main> );
}
export default EditPet;
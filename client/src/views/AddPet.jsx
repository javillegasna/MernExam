import PetAddFrm from "../Components/PetAddFrm";
import Header from "../layout/Header";

const AddPet = () => {
  return ( <main>
    <Header route={"/"} message={"back to home"} />
    <div className="card container">
        <h2 className="card-body" style={{ fontSize: "20px" }}>
          Know a pet needing a home
        </h2>
      </div>
    <PetAddFrm/>
  </main> );
}
export default AddPet;
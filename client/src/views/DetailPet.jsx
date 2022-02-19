import PetDetail from "../Components/PetDetail";
import Header from "../layout/Header";


const DetailPet = () => {
  return ( <main>
    <Header route={"/"} message={"back to home"} />
    <PetDetail/>
  </main> );
}
 
export default DetailPet;
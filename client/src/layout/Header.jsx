import { Link } from "react-router-dom";

const Header = ({ route, message }) => {
  return (
    <header className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <h1 className="navbar-brand" style={{fontSize:"30px"}} >Pet Shelter</h1>
        <form className="d-flex">
          <Link className="btn btn-outline-primary" to={route}>
            {message}
          </Link>
        </form>
      </div>
    </header>
  );
};
export default Header;

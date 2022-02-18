const IconButton = ({ icon, typeStyle, action }) => {
  return (
    <>
      {action ? (
        <img
          onClick={action}
          className={`btn btn-outline-${typeStyle}`}
          style={{ height: "2rem", padding: "5px", margin: "2px" }}
          src={icon}
          alt=""
        />
      ) : (
        <img
          className={`btn btn-outline-${typeStyle}`}
          style={{ height: "2rem", padding: "5px", margin: "2px" }}
          src={icon}
          alt=""
        />
      )}
    </>
  );
};
export default IconButton;

const IconButton = ({ icon, typeStyle, message, action }) => {
  return (
    <>
      {action ? (
        <button
          type="button"
          onClick={action}
          className={`btn btn-outline-${typeStyle} m-3`}
        >
          <img
            style={{ height: "2rem", padding: "5px", margin: "2px" }}
            src={icon}
            alt=""
          />
          <span>{message}</span>
        </button>
      ) : (
        <button type="submit" className={`btn btn-outline-${typeStyle} m-3`}>
          <img
            className="me-3"
            style={{ height: "2rem", padding: "5px", margin: "2px" }}
            src={icon}
            alt=""
          />
          <span>{message}</span>
        </button>
      )}
    </>
  );
};
export default IconButton;

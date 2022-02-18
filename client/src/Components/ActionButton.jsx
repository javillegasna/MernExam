const ActionButton = ({ type, action }) => {
  const buttons = {
    Edit: { style: "primary" },
    Delete: { style: "danger" },
    Cancel: { style: "danger" },
    Submit: { style: "primary" },
  };
  return type === "Submit" ? (
    <button className={`btn btn-outline-${buttons[type].style}`}>{type}</button>
  ) : (
    <button type="button" className={`m-2 btn btn-outline-${buttons[type].style}`} onClick={action}>
      {type}
    </button>
  );
};
export default ActionButton;

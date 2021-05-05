import "../css/brick.css";

const Brick = (props) => {
  return (
    <div
      style={{
        // setting the current selected color in background
        backgroundColor: props.color,
      }}
      className="brick"
      onClick={() => props.onClick(props.number)}
    >
      <span>{props.number}</span>
    </div>
  );
};

export default Brick;

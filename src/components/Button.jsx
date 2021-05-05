const Button = (props) => {
  return (
    <div className="add-btn-box">
      <button onClick={props.addBrick} className="add-btn">
        +
      </button>
    </div>
  );
};

export default Button;

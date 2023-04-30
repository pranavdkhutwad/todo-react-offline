import "./Button.css";

const Button = (props) => {
  return (
    <button onClick={props.onClick} className={`btn ${props.cls}`}>
      {props.title}
    </button>
  );
};

export default Button;

import "./Button.css";

const Button = (props) => {
  return <button className={`btn ${props.cls}`}>{props.title}</button>;
};

export default Button;

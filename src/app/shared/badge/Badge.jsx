import "./Badge.css";

const Badge = (props) => {
  return <div className="badge">{props.count || "zero"}</div>;
};

export default Badge;

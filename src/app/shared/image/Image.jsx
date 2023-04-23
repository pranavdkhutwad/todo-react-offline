import "./Image.css";

const Image = (props) => {
  return <img className="img" src={props.imgPath} alt="product" />;
};

export default Image;

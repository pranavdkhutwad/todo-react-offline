import Badge from "../../../shared/badge/Badge";
import Button from "../../../shared/button/Button";
import Image from "../../../shared/image/Image";

import "./Product.css";

const Product = (props) => {
  return (
    <div className="product">
      <Badge count={props.product.count} />
      <Image imgPath={props.product.imgPath} />
      <Button title="-" cls="btn-danger" />
      <Button title="+" cls="btn-success" />
      <Button title="delete" cls="btn-danger" />
    </div>
  );
};

export default Product;

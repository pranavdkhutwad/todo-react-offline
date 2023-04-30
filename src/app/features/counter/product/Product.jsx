import Badge from "../../../shared/badge/Badge";
import Button from "../../../shared/button/Button";
import Image from "../../../shared/image/Image";

import "./Product.css";

const Product = (props) => {
  return (
    <div className="product">
      <Badge count={props.product.count} />
      <Image imgPath={props.product.imgPath} />
      <Button
        onClick={() => props.onDecrement(props.product.id)}
        title="-"
        cls="btn-danger"
      />
      <Button
        onClick={() => props.onIncrement(props.product.id)}
        title="+"
        cls="btn-success"
      />
      <Button
        onClick={() => props.onDelete(props.product.id)}
        title="delete"
        cls="btn-danger"
      />
    </div>
  );
};

export default Product;

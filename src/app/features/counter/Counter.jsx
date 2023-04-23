import { useState } from "react";

import "./Counter.css";
import Product from "./product/Product";

const Counter = () => {
  let [products, setProducts] = useState([
    {
      id: 1,
      count: 0,
      imgPath:
        "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      count: 0,
      imgPath:
        "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      count: 0,
      imgPath:
        "https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
  ]);

  return (
    <section>
      <p className="total-count">Total 0</p>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </section>
  );
};

export default Counter;

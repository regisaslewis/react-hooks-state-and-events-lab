import React, { useState } from "react";

function Item({ name, category }) {

  const [item, setItem] = useState(false);
  const inCart = item ? "in-cart" : "";
  const haveOrNot = item ? "Remove From Cart" : "Add to Cart";
  const addOrRemove = item ? "remove" : "add";

  function handleAddItem() {
    setItem(!item);
  }

  return (
    <li className={inCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={addOrRemove} onClick={handleAddItem}>{haveOrNot}</button>
    </li>
  );
}

export default Item;

import React, { useRef } from "react";
import "./FindItem.css";

const FindItem = () => {
  const items = [
    {
      id: 1,
      name: "shoes",
      description: "shoes for the feet",
      stock: 50,
      price: 20.99,
    },
    {
      id: 2,
      name: "woman clothes",
      description: "For women",
      stock: 800,
      price: 10.5,
    },
    {
      id: 3,
      name: "men clothes",
      description: "For men",
      stock: 20,
      price: 5.0,
    },
    {
      id: 4,
      name: "kids clothes",
      description: "for children",
      stock: 40,
      price: 8.0,
    },
    {
      id: 5,
      name: "makeup",
      description: "for vanity",
      stock: 150,
      price: 500.0,
    },
    {
      id: 6,
      name: "jewerly",
      description: "for luxury people",
      stock: 15,
      price: 5000.59,
    },
    {
      id: 7,
      name: "sun glasses",
      description: "for cool people",
      stock: 20,
      price: 33.33,
    },
    {
      id: 8,
      name: "sportwear",
      description: "sweat with style",
      stock: 15,
      price: 800.0,
    },
    {
      id: 9,
      name: "hat",
      description: "get the old west fashion",
      stock: 8,
      price: 10.0,
    },
    {
      id: 10,
      name: "earphones",
      description: "listen your favorite music",
      stock: 18,
      price: 63.78,
    },
  ];
  const searchInput = useRef(null);
  return (
    <div className="row pb-15">
      <div className="col-100">
        <label htmlFor="item">Find Item:</label>
        <input type="text" name="item" id="item" ref={searchInput} />
        <div className="autocomplete-list">
          <ul>
            {items.map(({ name, price }) => (
              <li>
                {name} -- ${price}
              </li>
            ))}
          </ul>
        </div>
        <button className="primary">Add Item</button>
      </div>
    </div>
  );
};

export default FindItem;

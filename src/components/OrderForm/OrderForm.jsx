import "./OrderForm.css";
import FindItem from "../FindItem";
import { useState } from "react";
import SelectedItemsTable from "../SelectedItemsTable";

const OrderForm = () => {
  const [choosedItems, setChoosedItems] = useState([]);
  /* const [order, setOrder] = useState({
    country: "MX",
    city: "city",
    neighborhood: "neighborhood",
    street: "street",
    exterior_number: "exterior_number",
    interior_number: "interior_number",
  }); */
  const addItem = (item) => {
    setChoosedItems([...choosedItems, { ...item, quantity: 1 }]);
  };
  const setQuantity = (itemId, quantity) => {
    setChoosedItems(
      [...choosedItems].map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            quantity,
          };
        }
        return item;
      })
    );
  };
  const removeItem = (item) => {
    const items = [...choosedItems];
    setChoosedItems(items.filter(({ id }) => id !== item.id));
  };
  return (
    <div className="container">
      <header>
        <h2>Orders Form</h2>
      </header>
      <FindItem addItem={addItem} choosedItems={choosedItems} />
      <SelectedItemsTable
        choosedItems={choosedItems}
        removeItem={removeItem}
        setQuantity={setQuantity}
      />
    </div>
  );
};

export default OrderForm;

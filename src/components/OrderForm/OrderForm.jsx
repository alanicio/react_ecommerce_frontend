import "./OrderForm.css";
import FindItem from "../FindItem";
import { useState } from "react";
import SelectedItemsTable from "../SelectedItemsTable";

const OrderForm = () => {
  const [choosedItems, setChoosedItems] = useState([]);
  const addItem = (item) => {
    setChoosedItems([...choosedItems, item]);
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
      <SelectedItemsTable choosedItems={choosedItems} removeItem={removeItem} />
    </div>
  );
};

export default OrderForm;

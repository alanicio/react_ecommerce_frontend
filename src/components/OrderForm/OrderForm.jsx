import "./OrderForm.css";
import FindItem from "../FindItem";
import { useState } from "react";
import SelectedItemsTable from "../SelectedItemsTable";

const OrderForm = () => {
  const [choosedItems, setChoosedItems] = useState([]);
  const [order, setOrder] = useState({
    country: "",
    city: "",
    neighborhood: "",
    street: "",
    exterior_number: "",
    interior_number: "",
  });
  const {
    country,
    city,
    neighborhood,
    street,
    exterior_number,
    interior_number,
  } = order;
  const orderChangeHandler = (event) => {
    setOrder({ [event.target.name]: event.target.value });
  };
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
  const isValid = () => {
    if (
      country !== "" &&
      city !== "" &&
      neighborhood !== "" &&
      street !== "" &&
      exterior_number !== "" &&
      choosedItems.length > 0
    ) {
      return true;
    }
    return false;
  };
  return (
    <form className="container">
      <header>
        <h2>Orders Form</h2>
      </header>
      <div className="row">
        <div className="col-60 pr-8">
          <FindItem addItem={addItem} choosedItems={choosedItems} />
          <SelectedItemsTable
            choosedItems={choosedItems}
            removeItem={removeItem}
            setQuantity={setQuantity}
          />
        </div>
        <div className="col-40 pl-8">
          <div className="row pb-10">
            <div className="col-100">
              <label htmlFor="country">Country</label>
              <input
                type="text"
                name="country"
                id="country"
                value={country}
                onChange={orderChangeHandler}
              />
            </div>
          </div>
          <div className="row pb-10">
            <div className="col-100">
              <label htmlFor="country">City</label>
              <input
                type="text"
                name="city"
                id="city"
                value={city}
                onChange={orderChangeHandler}
              />
            </div>
          </div>
          <div className="row pb-10">
            <div className="col-100">
              <label htmlFor="country">Neighborhood</label>
              <input
                type="text"
                name="neighborhood"
                id="neighborhood"
                value={neighborhood}
                onChange={orderChangeHandler}
              />
            </div>
          </div>
          <div className="row pb-10">
            <div className="col-100">
              <label htmlFor="country">Street</label>
              <input
                type="text"
                name="street"
                id="street"
                value={street}
                onChange={orderChangeHandler}
              />
            </div>
          </div>
          <div className="row pb-10">
            <div className="col-100">
              <label htmlFor="country">Exterior number</label>
              <input
                type="text"
                name="exterior_number"
                id="exterior_number"
                value={exterior_number}
                onChange={orderChangeHandler}
              />
            </div>
          </div>
          <div className="row pb-10">
            <div className="col-100">
              <label htmlFor="country">Interior number</label>
              <input
                type="text"
                name="interior_number"
                id="interior_number"
                value={interior_number}
                onChange={orderChangeHandler}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row last-row">
        <div className="col-60">
          <h4>Total: $800000</h4>
        </div>
        <div className="col-40">
          <button type="submit" className="primary" disabled={!isValid()}>
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default OrderForm;

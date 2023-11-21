import React from "react";
import "./OrderForm.css";

const OrderForm = () => {
  return (
    <div className="container">
      <header>
        <h2>Orders Form</h2>
      </header>
      <div className="row with-border-bottom pb-15">
        <div className="col-100">
          <label htmlFor="item">Find Item</label>
          <input type="text" name="item" id="item" />
          <button>Add Item</button>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;

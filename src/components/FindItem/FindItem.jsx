import React from "react";

const FindItem = () => {
  return (
    <div className="row with-border-bottom pb-15">
      <div className="col-100">
        <label htmlFor="item">Find Item</label>
        <input type="text" name="item" id="item" />
        <button>Add Item</button>
      </div>
    </div>
  );
};

export default FindItem;

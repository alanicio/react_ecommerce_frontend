import PropTypes from "prop-types";
import FindItem from "../FindItem";
import SelectedItemsTable from "../SelectedItemsTable";

const OrderFormView = ({
  onSubmitHandler,
  addItem,
  choosedItems,
  removeItem,
  setQuantity,
  order,
  orderChangeHandler,
  calculationOfTheTotal,
  isValid,
}) => {
  const {
    country,
    city,
    neighborhood,
    street,
    exterior_number,
    interior_number,
  } = order;
  return (
    <form className="container" onSubmit={onSubmitHandler}>
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
          <h4>Total: ${calculationOfTheTotal()}</h4>
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

OrderFormView.propTypes = {
  onSubmitHandler: PropTypes.func,
  addItem: PropTypes.func,
  choosedItems: PropTypes.array,
  removeItem: PropTypes.func,
  setQuantity: PropTypes.func,
  order: PropTypes.object,
  orderChangeHandler: PropTypes.func,
  calculationOfTheTotal: PropTypes.func,
  isValid: PropTypes.func,
};

export default OrderFormView;

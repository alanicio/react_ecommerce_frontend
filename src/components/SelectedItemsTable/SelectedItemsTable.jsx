import PropTypes from "prop-types";
import "./SelectedItemsTable.css";

const SelectedItemsTable = ({ choosedItems, removeItem, setQuantity }) => {
  const onInputNumberChange = (event, item) => {
    const quantityValue = event.target.value;
    if (quantityValue > item.stock) {
      setQuantity(item.id, item.stock);
    } else {
      setQuantity(item.id, quantityValue);
    }
  };
  return (
    <div className="table-container">
      <h3>Added Items</h3>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Available</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {choosedItems.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.stock}</td>
              <td>
                <input
                  type="number"
                  name="quantity"
                  id="quantity"
                  max={item.stock}
                  min={1}
                  value={item.quantity}
                  onChange={(event) => onInputNumberChange(event, item)}
                />
              </td>
              <td>
                <button className="delete" onClick={() => removeItem(item)}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

SelectedItemsTable.propTypes = {
  choosedItems: PropTypes.array,
  removeItem: PropTypes.func,
  setQuantity: PropTypes.func,
};

export default SelectedItemsTable;

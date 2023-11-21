import PropTypes from "prop-types";
import "./SelectedItemsTable.css";

const SelectedItemsTable = ({ choosedItems, removeItem }) => {
  return (
    <div className="table-container">
      <h3>Added Items</h3>
      <table>
        <tr>
          <th>Item</th>
          <th>Price</th>
          <th>Available Stock</th>
          <th>Quantity</th>
        </tr>
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
              />
            </td>
            <td>
              <button onClick={removeItem}>Remove</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

SelectedItemsTable.propTypes = {
  choosedItems: PropTypes.object,
  removeItem: PropTypes.func,
};

export default SelectedItemsTable;

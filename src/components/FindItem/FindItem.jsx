import { useState } from "react";
import "./FindItem.css";
import useGetItems from "../../hooks/services/items/useGetItems";
import PropTypes from "prop-types";

const FindItem = ({ addItem, choosedItems }) => {
  const [search, setSearch] = useState("");
  const [displayItemList, setDisplayItemList] = useState(false);
  const { items } = useGetItems(search);
  const choosedIds = choosedItems.map(({ id }) => id);
  const onFocusInput = () => {
    setDisplayItemList(true);
  };
  const onBlurInput = () => {
    setDisplayItemList(false);
  };
  const onChangeSearch = (event) => {
    setSearch(event.target.value);
  };
  const onClickItem = (item) => {
    addItem(item);
  };
  return (
    <div className="row pb-15">
      <div className="col-100">
        <label htmlFor="search">Find Item:</label>
        <input
          autoComplete="off"
          type="text"
          name="search"
          id="search"
          onFocus={onFocusInput}
          onBlur={onBlurInput}
          value={search}
          onChange={onChangeSearch}
        />
        {displayItemList ? (
          <div className="autocomplete-wrapper">
            <div className="autocomplete-list">
              <ul>
                {items
                  .filter((item) => !choosedIds.includes(item.id))
                  .map((item) => (
                    <li onMouseDown={() => onClickItem(item)} key={item.id}>
                      {item.name} -- ${item.price}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

FindItem.propTypes = {
  addItem: PropTypes.func,
  choosedItems: PropTypes.array,
};

export default FindItem;

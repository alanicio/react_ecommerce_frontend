import { useState } from "react";
import "./FindItem.css";
import useGetItems from "../../hooks/services/items/useGetItems";

const FindItem = () => {
  const [search, setSearch] = useState("");
  const [displayItemList, setDisplayItemList] = useState(false);
  const { items } = useGetItems(search);
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
    console.log({ item });
  };
  return (
    <div className="row pb-15">
      <div className="col-100">
        <label htmlFor="search">Find Item:</label>
        <input
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
                {items.map((item) => (
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

export default FindItem;

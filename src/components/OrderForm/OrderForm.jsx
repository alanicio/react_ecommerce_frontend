import "./OrderForm.css";
import { useEffect, useState } from "react";
import OrderFormView from "./OrderFormView";
import useCreateOrder from "src/hooks/services/orders/useCreateOrder";
import Alert from "../Alert";

const intialStateOrder = {
  country: "",
  city: "",
  neighborhood: "",
  street: "",
  exterior_number: "",
  interior_number: "",
};

const OrderForm = () => {
  const [choosedItems, setChoosedItems] = useState([]);
  const [order, setOrder] = useState(intialStateOrder);
  const [submit, setSubmit] = useState(false);
  const { response, loading } = useCreateOrder(order, choosedItems, submit);
  const { country, city, neighborhood, street, exterior_number } = order;
  const orderChangeHandler = (event) => {
    setOrder({ ...order, [event.target.name]: event.target.value });
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
            quantity: Number(quantity),
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
  const calculationOfTheTotal = () => {
    return choosedItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
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
  const onSubmitHandler = (event) => {
    event.preventDefault();
    setSubmit(true);
  };
  useEffect(() => {
    if (submit === false) {
      setChoosedItems([]);
      setOrder(intialStateOrder);
    }
  }, [submit]);
  return loading ? (
    <h1>loading...</h1>
  ) : submit ? (
    <Alert
      type={response ? "success" : "error"}
      close={() => setSubmit(false)}
    />
  ) : (
    <OrderFormView
      {...{
        onSubmitHandler,
        addItem,
        choosedItems,
        removeItem,
        setQuantity,
        order,
        orderChangeHandler,
        calculationOfTheTotal,
        isValid,
      }}
    />
  );
};

export default OrderForm;

import useAxios from "src/hooks/useAxios";

const useCreateOrder = (order, items, submit) => {
  const { response, loading, error } = useAxios({
    url: `orders/`,
    method: "POST",
    data: JSON.stringify({ ...order, items }),
    toWait: !submit,
  });
  return { response, loading, error };
};

export default useCreateOrder;

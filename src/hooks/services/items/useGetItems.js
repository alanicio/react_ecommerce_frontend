import useAxios from "../../useAxios";

const useGetItems = (search) => {
  const { response, loading, error } = useAxios({
    url: `items?search=${search}`,
    method: "GET",
  });
  const items = response ? response.data : [];
  return { response, loading, error, items };
};

export default useGetItems;

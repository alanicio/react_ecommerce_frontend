import useAxios from "../../useAxios";

const useGetItems = () => {
  const { response, loading, error } = useAxios({
    url: `items`,
    method: "GET",
  });
  return { response, loading, error };
};

export default useGetItems;

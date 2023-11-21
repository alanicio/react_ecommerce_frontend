import { useState } from "react";
import useAxios from "../../useAxios";
import { useEffect } from "react";

const useGetItems = (searchValue) => {
  const [search, setSearch] = useState(searchValue);
  const { response, loading, error } = useAxios({
    url: `items?search=${search}`,
    method: "GET",
  });
  const items = response ? response.data : [];
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearch(searchValue);
    }, 350);

    return () => {
      clearTimeout(timer);
    };
  }, [searchValue]);

  return { response, loading, error, items };
};

export default useGetItems;

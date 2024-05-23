import { useCallback, useEffect, useState } from "react";

export const useLoadApi = <T = any>(request: () => Promise<T>) => {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchData = useCallback(async () => {
    request()
      .then(setData)
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, []);

  const refetch = useCallback(async () => {
    await fetchData();
  }, []);

  return {
    data,
    error,
    isLoading,
    refetch,
  };
};

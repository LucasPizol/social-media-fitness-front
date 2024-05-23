import { useEffect, useState } from "react";

export const useLoadApi = <T = any>(request: () => Promise<T>) => {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    request()
      .then(setData)
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, []);

  return {
    data,
    error,
    isLoading,
  };
};
